import properties from "./properties.js";
export default async function fetchAny(url, handleData, handleError, method, body, withToken) {
    if (properties.backendURL)
      url = properties.backendURL + url;
    try {
      const options = makeOptions(method, withToken, body);
      const response = await fetch(url, options);
      const json = await handleHttpErrors(response);
      // console.log("fetchAny", json);
      handleData(json);
    } catch (error) {
      if(error.status){
        const message = await error.fullError;
        // console.log("ERROR:",error.status, message.message);
        handleError(message.message);
      } else {
        handleError("Network error");
      }
    }
  
    function makeOptions(method, withToken, body) {
      method = method ? method : 'GET';
      var opts = {
        method: method,
        headers: {
          ...(['PUT', 'POST'].includes(method) && { //using spread operator to conditionally add member to headers object.
            "Content-type": "application/json"
          }),
          "Accept": "application/json"
        }
      }
      if (withToken && loggedIn()) {
        opts.headers["x-access-token"] = getToken();
      }
      if (body) {
        opts.body = JSON.stringify(body);
      }
      return opts;
    }

    function handleHttpErrors(res) {
      if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
      }
      return res.json();
    }
  }