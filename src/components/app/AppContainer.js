// @flow
import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = ({ weatherWidget: { error } }) => ({
  error
});

export default connect(
  mapStateToProps,
  null
)(App);
