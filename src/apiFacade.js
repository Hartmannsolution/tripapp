import properties from "./properties";

  const loggedIn = () => {
    const loggedIn = getToken() != null;
    return loggedIn;
  };

  // const makeOptions = (method, withToken, body) => {
  //   method = method ? method : "GET";
  //   var opts = {
  //     method: method,
  //     headers: {
  //       ...(["PUT", "POST"].includes(method) && {
  //         "Content-type": "application/json",
  //       }),
  //       Accept: "application/json",
  //     },
  //   };
  //   if (withToken && loggedIn()) {
  //     opts.headers["Authorization"] = `Bearer ${getToken()}`;
  //   }
  //   if (body) {
  //     opts.body = JSON.stringify(body); 
  //   }
  //   return opts;
  // };

  // const handleHttpErrors = async (res) => {
  //   if (!res.ok) {
  //     const error = await res.json();
  //     throw new Error(JSON.stringify({...error, status:res.status})); // The Error constructor in JavaScript accepts a string as its argument, which becomes the message property of the error. 
  //   }
  //   return res.json();
  // };

  const handleHttpError = async (response) => {
    if (!response.ok) {
      const errorDetails = await response.json().catch(() => null); // Parse JSON if available
      const message = errorDetails?.message || errorDetails?.msg || "An unexpected error occurred";
      throw {
        status: response.status,
        message,
      };
    }
    return response.json(); // Automatically parse JSON if the response is valid
  };
  

  // const fetchAny = async (url, handleData, method, body, withToken) => {

  //   if (properties && properties.backendURL)
  //     url = `${properties.backendURL}${url}`;

  //   try {
  //     const options = makeOptions(method, withToken, body);
  //     const response = await fetch(url, options);
  //     const json = await er/andleHttpErrors(response);
  //     handleData(json);

  //   } catch (error) {
  //     const serverError = JSON.parse(error.message); // handleHttpErrors returns a string, so we need to parse it to get the object.
  //     console.log("fetchAny error", serverError);

  //     if (serverError.status) {
  //       throw new Error(serverError.msg); // response from server should have 'status' and 'msg' properties. A problem here is of Asyncronous nature. The error is thrown in the catch block, but the catch block is not asyncronous. So the error is not caught by the try-catch block in the calling function.
  //     } else {
  //       throw new Error("Network error");
  //     }
  //   }
  // };

  const fetchAny = async (url, method = "GET", body = null, withToken = false) => {
    if (properties && properties.backendURL)
      url = `${properties.backendURL}${url}`;
    const headers = new Headers({
      "Accept": "application/json",
      ...(body && { "Content-Type": "application/json" }), // Add content type only for POST/PUT
    });
  
    if (withToken) {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`); // Attach token if available
      }
    }
  
    const options = {
      method,
      headers,
      ...(body && { body: JSON.stringify(body) }),
    };
  
    const response = await fetch(url, options);
    return handleHttpError(response); // Use handleHttpError to process errors
  };

  const login = async (username, password) => {
    const url = "auth/login"; // Replace with your actual login endpoint
    const body = { username, password };
  
    const { token } = await fetchAny(url, "POST", body); // Expect token in response
    localStorage.setItem("token", token); // Store token securely
    return readJwtToken(token); // Return user details for the app
  };
  
  const logout = () => {
    localStorage.removeItem("token"); // Clear token on logout
  };
  
  const readJwtToken = (token) => {
    const payload = token.split(".")[1];
    return JSON.parse(atob(payload)); // Decode base64 payload to get user details
  };

  

  // const login = (username, password, setUser) => {
  //   try{

  //   fetchAny(
  //     `auth/login`,
  //     (data) => {
  //       setToken(data.token);
  //       const { iss, sub, exp, roles, username } = readJwtToken(data.token);
  //       setUser({ username, roles });
  //     },
  //     "POST",
  //     { username, password },
  //     false
  //   );
  //   } catch (error) {
  //     console.log('login failed. Error: ', error);
  //     throw error;
  //   }
  // };

  const setToken = (token) => {
    localStorage.setItem("jwtToken", token);
  };

  const getToken = () => {
    return localStorage.getItem("jwtToken");
  };

  // const logout = () => {
  //   localStorage.removeItem("jwtToken");
  // };

  // const readJwtToken = (token) => {
  //   if (token === null && token !== undefined) return null;
  //   var base64Url = token.split(".")[1];
  //   var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  //   // console.log(base64);
  //   const jsonPayload = decodeURIComponent(
  //     window
  //       .atob(base64)
  //       .split("")
  //       .map(function (c) {
  //         return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
  //       })
  //       .join("")
  //   );
  //   console.log("readJwtToken", JSON.parse(jsonPayload));
  //   return JSON.parse(jsonPayload);
  // };

export {
  setToken,
    getToken,
    loggedIn,
    login,
    logout,
    fetchAny,
    readJwtToken,
};
