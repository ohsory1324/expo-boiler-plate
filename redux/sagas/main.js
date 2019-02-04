import { all, takeLatest } from 'redux-saga/effects';

// eslint-disable-next-line
function* log(action) {
  console.log(
    '***** LOGGER *****\n',
    action,
    '\n******************',
  );
}

export default all([
  takeLatest('*', log),
]);
