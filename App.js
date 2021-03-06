import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import reducers from './redux/reducers';
import sagas from './redux/sagas';
import Container from './Container';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(sagas);

export default ({ skipLoadingScreen }) => (
  <Provider store={store}>
    <Container skipLoadingScreen={skipLoadingScreen} />
  </Provider>
);
