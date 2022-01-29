import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { collectionApi } from './services/collection';

const store = configureStore({
  reducer: {
    [collectionApi.reducerPath]: collectionApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(collectionApi.middleware)
  }
});

setupListeners(store.dispatch)

export default store;