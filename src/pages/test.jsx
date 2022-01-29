import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import { Clicker } from '../components/ui';

export const TestPage = () => {
  const { counter } = useSelector(({ ui }) => {
    const { counter } = ui;

    return {
      counter,
    };
  });

  return (
    <div>
      <h1>{counter}</h1>

      <Link href="/">Home</Link>

      <Clicker></Clicker>
    </div>
  );
};

export default TestPage;
