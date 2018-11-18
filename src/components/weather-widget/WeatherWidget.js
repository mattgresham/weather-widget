// @flow
import React, { Component } from 'react';
import type { Units } from '../../types/units';
import style from './WeatherWidget.module.css';

type Props = {
  getWeather: Function,
  icon?: string,
  isWindShown: boolean,
  location?: string,
  temperature?: number,
  title?: string,
  units?: Units,
  wind?: string
};

class WeatherWidget extends Component<Props> {
  static defaultProps = {
    icon: '',
    location: '—',
    temperature: 0,
    title: '—',
    units: 'metric',
    wind: '—'
  };

  constructor(props: Props) {
    super(props);
    props.getWeather();
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.units !== this.props.units) {
      this.props.getWeather();
    }
  }

  render() {
    const {
      icon,
      isWindShown,
      location,
      temperature,
      title,
      units,
      wind
    } = this.props;

    return (
      <div className={style.widget}>
        <div className={style.title}>{title || 'Title of widget'}</div>
        <div className={style.container}>
          <div className={style.iconContainer}>
            {icon && (
              <img
                alt=""
                className={style.icon}
                src={`https://openweathermap.org/img/w/${icon}.png`}
              />
            )}
          </div>
          <div className={style.weatherContainer}>
            <div>{location || '-'}</div>
            <div className={style.temperature}>
              {temperature || '-'}
              <span className={style.degree}>&deg;</span>
            </div>
            {isWindShown && (
              <div className={style.windContainer}>
                <span className={style.windLabel}>Wind</span> {wind || '-'}
                {units === 'metric' ? 'km/h' : 'mph'}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherWidget;
