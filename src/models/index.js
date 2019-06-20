import { getTest } from '../services/index';
export default {
  namespace: 'index',
  state: {
    abc: 2222,
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    *fetch(
      {
        payload: { id = 1 },
      },
      { call, put, select },
    ) {
      yield call(getTest, id);
      const abc = yield select(state => state.test.abc + state.index.abc);
      console.log(abc);
      yield put({ type: 'save', payload: { abc } });
    },
  },
};
