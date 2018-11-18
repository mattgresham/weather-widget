// @flow
declare var APP_CONFIG: {
  [string]: string
};
const { API_ENDPOINT_WEATHER } = APP_CONFIG;

const getApiUrl = (url: string) => `${API_ENDPOINT_WEATHER}${url}`;

const getRequest = async (url: string) => {
  try {
    const response = await fetch(getApiUrl(url));
    const json = await response.json();
    return response.ok ? json : Promise.reject(json);
  } catch (e) {
    return Promise.reject(new Error('Unable to request data.'));
  }
};

// eslint-disable-next-line import/prefer-default-export
export { getRequest };
