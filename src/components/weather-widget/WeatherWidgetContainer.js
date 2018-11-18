// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getWeather } from '../../reducers/weatherWidget';
import WeatherWidget from './WeatherWidget';

const mapStateToProps = ({
  weatherWidget: {
    isWindShown,
    title,
    units,
    weather: { icon, location, temperature, wind }
  }
}) => ({
  icon,
  isWindShown: isWindShown === 'on',
  location,
  temperature,
  title,
  units,
  wind
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getWeather
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherWidget);
