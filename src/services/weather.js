// @flow
import { getRequest } from './request';
import type { Units } from '../types/units';

// eslint-disable-next-line import/prefer-default-export
export const fetchWeather = (
  latitude: number,
  longitude: number,
  units: Units
) => getRequest(`&lat=${latitude}&lon=${longitude}&units=${units}`);
