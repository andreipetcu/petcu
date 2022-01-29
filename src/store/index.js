import { configureStore } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { isBrowser } from './../functions';

import uiReducer from './ui/uiSlice';

let store;

export const initializeStore = (preloadedState) => {
  const reducer = {
    ui: uiReducer,
  };
  let _store =
    store ??
    configureStore({
      preloadedState,
      reducer,
    });

  if (preloadedState && store && !isBrowser()) {
    _store = configureStore({
      preloadedState: {
        ...store.getState(),
        ...preloadedState,
      },
      reducer,
    });

    store = undefined;
  }

  if (!isBrowser()) {
    return _store;
  }

  if (!store) {
    store = _store;
  }

  // now dispatch state, mostly front-end
  store.dispatch({
    type: 'ssr/hydrate',
    payload: preloadedState,
  });

  return _store;
};

export const useStore = (serverState) => {
  const store = useMemo(() => {
    return initializeStore(serverState);
  }, [serverState]);

  return store;
};

export default store;
