import { takeLatest, delay, put } from 'redux-saga/effects';

export function* onIncrement() {
  let delayTime = 0;
  yield console.log(`I will be incremente in: ${delayTime}ms`);
  yield delay(delayTime);
  yield put({ type: 'INCREMENT_FROM_SAGA' });
}

export function* incrementSaga() {
  yield takeLatest('INCREMENT', onIncrement);
}
