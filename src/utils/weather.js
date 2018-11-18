// @flow
import type { CurrentWeatherResponse } from '../types/weatherResponse';

const windDirectionMap = [
  'N',
  'NNE',
  'NE',
  'ENE',
  'E',
  'ESE',
  'SE',
  'SSE',
  'S',
  'SSW',
  'SW',
  'WSW',
  'W',
  'WNW',
  'NW',
  'NNW',
  'N'
];
const toWindString = ({ deg, speed }) => {
  // Divide the compass up into 16 sectors for each compass point
  // and handle 0 and 360 degrees as North
  const sector = Math.round((deg % 360) / (360 / 16));
  return `${windDirectionMap[sector]} ${Math.round(speed)}`;
};

// As this is a 3rd party API that may not be trustable,
// this function is deliberately written defensively
const toWeatherProps = ({
  main: { temp } = {},
  name,
  wind,
  weather
}: CurrentWeatherResponse = {}) => ({
  temperature: temp ? Math.round(temp) : '',
  location: name || '',
  wind: wind ? toWindString(wind) : '',
  icon: weather && weather[0] ? weather[0].icon : ''
});

export default toWeatherProps;
