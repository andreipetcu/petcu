import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { decrement, increment } from '../../store/ui/uiSlice';

export const Clicker = () => {
  const dispatch = useDispatch();
  const [salam] = useSelector(({ ui }) => {
    return [ui.counter];
  });

  return (
    <div>
      {salam}
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
    </div>
  );
};

export default Clicker;
