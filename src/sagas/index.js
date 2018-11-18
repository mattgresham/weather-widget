// @flow
import weatherWidget from './weatherWidget';

// Combine all sagas for a central index of sagas
function rootSaga(sagaMiddleware: Object) {
  sagaMiddleware.run(weatherWidget);
}

export default rootSaga;
