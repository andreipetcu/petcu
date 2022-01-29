import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  counter: 0,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    },
  },
  extraReducers: (builder) => {
    builder.addCase('ssr/hydrate', (state, { payload }) => {
      // when the node app boots, it seems like there is a pass
      // through app js
      if (!payload) {
        return state;
      }

      return {
        ...payload.ui,
        ...state,
      };
    });
  },
});

export const { increment, decrement } = uiSlice.actions;

export default uiSlice.reducer;
