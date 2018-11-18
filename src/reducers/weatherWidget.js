// @flow
import {
  WEATHER_API_REQUEST,
  WEATHER_API_SUCCESS,
  WEATHER_API_FAILURE,
  WEATHER_SET_TITLE,
  WEATHER_SET_UNITS,
  WEATHER_SET_IS_WIND_SHOWN
} from '../actions';
import WindConstants from '../constants/wind';
import type { Units } from '../types/units';

type Weather = {
  icon: string,
  location: string,
  temperature: number | '-',
  wind: string
};

type Action = {
  type: string,
  payload: Object
};

type State = {
  error: string,
  fetching: boolean,
  isWindShown: $Keys<typeof WindConstants>,
  title: string,
  wind: boolean,
  weather: Weather
};

const initialState = {
  error: '',
  fetching: false,
  isWindShown: 'on',
  title: '',
  units: 'metric',
  wind: true,
  weather: {
    icon: '',
    location: '-',
    temperature: 0,
    wind: '-'
  }
};

// Reducers for all Widget actions
export default (state: State = initialState, action: Action) => {
  const { payload, type } = action;

  switch (type) {
    case WEATHER_API_REQUEST:
      return {
        ...state,
        fetching: true,
        error: null,
        weather: initialState.weather
      };
    case WEATHER_API_SUCCESS:
      return { ...state, fetching: false, weather: payload.weather };
    case WEATHER_API_FAILURE:
      return {
        ...state,
        fetching: false,
        weather: initialState.weather,
        error: payload.error
      };
    case WEATHER_SET_TITLE:
      return { ...state, title: payload.title };
    case WEATHER_SET_UNITS:
      return { ...state, units: payload.units };
    case WEATHER_SET_IS_WIND_SHOWN:
      return { ...state, isWindShown: payload.isWindShown };
    default:
      return state;
  }
};

export const getWeather = () => ({
  type: WEATHER_API_REQUEST,
  payload: {}
});

export const setError = ({ message }: Error) => ({
  type: WEATHER_API_FAILURE,
  payload: { error: message }
});

export const setIsWindShown = (isWindShown: boolean) => ({
  type: WEATHER_SET_IS_WIND_SHOWN,
  payload: { isWindShown }
});

export const setTitle = (title: string) => ({
  type: WEATHER_SET_TITLE,
  payload: { title }
});

export const setUnits = (units: Units) => ({
  type: WEATHER_SET_UNITS,
  payload: { units }
});

export const setWeather = (weather: Weather) => ({
  type: WEATHER_API_SUCCESS,
  payload: { weather }
});
