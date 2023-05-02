import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/rootReducer';
import rootSagas from './sagas/rootSaga';

// Create sagas middleware
const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
  );
  // Running sagas
  sagaMiddleware.run(rootSagas);
  return store;
}
