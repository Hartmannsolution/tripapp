import properties from "./properties";



const apiFacade = () => {

  const loggedIn = () => {
    const loggedIn = getToken() != null;
    return loggedIn;
  };

const makeOptions = (method, withToken, body) => {
  method = method ? method : "GET";
  var opts = {
    method: method,
    headers: {
      ...(["PUT", "POST"].includes(method) && {
        //using spread operator to conditionally add member to headers object.
        "Content-type": "application/json",
      }),
      Accept: "application/json",
    },
  };
  if (withToken && loggedIn()) {
    opts.headers["Authorization"] = `Bearer ${getToken()}`;
  }
  if (body) {
    opts.body = JSON.stringify(body);
  }
  return opts;
};

const handleHttpErrors = (res) => {
  if (!res.ok) {
    console.log('ERROR!',res);
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
};


const fetchAny = async (
  url,
  handleData,
  handleError,
  method,
  body,
  withToken
) => {
  if (properties && properties.backendURL)
    url = `${properties.backendURL}${url}`;
  try {
    const options = makeOptions(method, withToken, body);
    const response = await fetch(url, options);
    console.log('response',response)
    const json = await handleHttpErrors(response);
    console.log("fetchAny", json);
    handleData(json);
  } catch (error) {
    console.log(error);
    if (error.status) {
      const message = await error.fullError;
      console.log("ERROR CAUGHT IN fetchAny:",error, message, message.title);
      handleError(message.title);
      // throw new Error(message.message);
    } else {
      handleError("Network error");
      // throw new Error("Network error");
    }
  }
};

  const login = (user, password) => {
    fetchAny(
      `auth/login`,
      (data) => setToken(data.token),
      (err) => console.log(err),
      "POST",
      { username: user, password: password },
      false
    );
  };

  const setToken = (token) => {
    localStorage.setItem("jwtToken", token);
  };

  const getToken = () => {
    return localStorage.getItem("jwtToken");
  };

  const logout = () => {
    localStorage.removeItem("jwtToken");
  };

  const readJwtToken = (token) => {
    if (token === null && token !== undefined) return null;
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    // console.log(base64);
    const jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(jsonPayload);
  };

  return {
    setToken,
    getToken,
    loggedIn,
    login,
    logout,
    fetchAny,
    readJwtToken,
  };
};
const facade = apiFacade();
export default facade;
