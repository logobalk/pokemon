export default class ApiService {
  static headers = {
    "Content-Type": "application/json",
  };

  static errorDispatcher = () => {};

  static getApiUrl() {
    const apiUrl = process.env.REACT_APP_API_URL || "https://pokeapi.co";
    return apiUrl;
  }

  static getSocketUrl() {
    const socketUrl = process.env.REACT_APP_WEB_SOCKET_URL || "localhost:3000";
    return socketUrl;
  }

  static registerErrorDispatcher(errorDispatcher) {
    ApiService.errorDispatcher = errorDispatcher;
  }

  static get(url, queryParams = null, options = null) {
    const queryString =
      (queryParams &&
        `?${Object.keys(queryParams)
          .reduce((array, key) => [...array, `${key}=${queryParams[key]}`], [])
          .join("&")}`) ||
      "";
    return ApiService.performs(`${url}${queryString}`, "GET", null, options);
  }

  static post(url, data, options = null) {
    return ApiService.performs(url, "POST", data, options);
  }

  static put(url, data, options = null) {
    return ApiService.performs(url, "PUT", data, options);
  }

  static patch(url, data, options = null) {
    return ApiService.performs(url, "PATCH", data, options);
  }

  static delete(url, data, options = null) {
    return ApiService.performs(url, "DELETE", data, options);
  }

  static async postWithFormData(url, formData) {
    const requestHeaders = {
      // ...accessToken,
    };

    const params = {
      method: "POST",
      headers: requestHeaders,
      body: formData,
    };
    try {
      const response = await fetch(url, params);
      if (!response.ok) {
        throw response;
      }

      ApiService.errorDispatcher(null);
      const text = await response.text();
      if (!text) {
        return null;
      }
      return JSON.parse(text);
    } catch (error) {
      const refinedError = {
        status: error.status || 0,
        statusText: error.statusText || error.message,
        original: error,
      };

      ApiService.errorDispatcher(refinedError);
      throw refinedError;
    }
  }

  static async performs(url, method, body = null, options = null) {
    //   const tokenData = localStorage.getItem('access-token');
    //   const storedAccessToken = tokenData && JSON.parse(tokenData);
    //   const accessToken = storedAccessToken ? {
    //     Authorization: `Bearer ${storedAccessToken.accessToken}`,
    //   } : {};

    const requestHeaders = {
      ...ApiService.headers,
      // ...accessToken,
    };

    // Override headers if specified in options.
    if (options && options.headers) {
      Object.assign(requestHeaders, options.headers);
    }

    const params = {
      method,
      headers: requestHeaders,
    };

    if (body) {
      let requestBody = body;
      if (requestHeaders["Content-Type"] === "application/json") {
        requestBody = JSON.stringify(requestBody);
      }
      params.body = requestBody;
    }

    try {
      const response = await fetch(url, params);
      if (!response.ok) {
        throw response;
      }

      ApiService.errorDispatcher(null);
      const text = await response.text();
      if (!text) {
        return null;
      }
      return JSON.parse(text);
    } catch (error) {
      const refinedError = {
        status: error.status || 0,
        statusText: error.statusText || error.message,
        original: error,
      };

      ApiService.errorDispatcher(refinedError);
      throw refinedError;
    }
  }
}
