// @flow

type weather = {
  icon: string
};

export type CurrentWeatherResponse = {
  main?: {
    temp: number
  },
  name?: string,
  wind?: {
    deg: number,
    speed: number
  },
  weather?: Array<weather>
};
