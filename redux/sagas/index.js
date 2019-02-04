import { all } from 'redux-saga/effects';

import mainSagas from './main';

export default function* () {
  yield all([
    mainSagas,
  ]);
}
