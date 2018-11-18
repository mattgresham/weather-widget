const APP_CONFIG = {
  API_ENDPOINT_WEATHER:
    'https://api.openweathermap.org/data/2.5/weather?appid=5c4dcee3001c4312e0fbaf563db8d490'
};

Object.freeze(APP_CONFIG);

if (typeof module !== 'undefined') {
  module.exports = APP_CONFIG;
}
