// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  setIsWindShown,
  setTitle,
  setUnits
} from '../../reducers/weatherWidget';
import Editor from './Editor';

const mapStateToProps = ({ weatherWidget: { isWindShown, title, units } }) => ({
  isWindShown,
  title,
  units
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setIsWindShown,
      setTitle,
      setUnits
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
