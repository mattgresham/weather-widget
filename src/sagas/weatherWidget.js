// @flow
import { takeLatest, all, call, put, select } from 'redux-saga/effects';
import { WEATHER_API_REQUEST } from '../actions';
import { setError, setWeather } from '../reducers/weatherWidget';
import { fetchWeather } from '../services/weather';
import getLocation from '../services/location';
import toWeatherProps from '../utils/weather';

function* getWeather() {
  try {
    // Get the wind speed/temperature measurement units
    const measurementUnits = yield select(
      ({ weatherWidget: { units } }) => units
    );
    // Get the current location
    const {
      coords: { latitude, longitude }
    } = yield call(getLocation);
    // Call the results fetch method and process the response
    const weather = yield call(
      fetchWeather,
      latitude,
      longitude,
      measurementUnits
    );
    // The call was successful, so notify the state so that anything relying on it can update
    yield put(setWeather(toWeatherProps(weather)));
  } catch (error) {
    // The call errored out, so notify the state so that anything relying on it can update
    yield put(setError(error));
  }
}

// Combine all weatherWidget sagas into a watcher
function* weatherWidget(): Iterable<*> {
  yield all([takeLatest(WEATHER_API_REQUEST, getWeather)]);
}

export default weatherWidget;
