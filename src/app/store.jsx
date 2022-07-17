import { configureStore } from '@reduxjs/toolkit';
import globalState from './globalState';

const store = configureStore({
  reducer: {
    budget: globalState.reducer,
  },
});

export default store;
