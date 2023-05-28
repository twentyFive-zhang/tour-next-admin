'use client';

import { Button } from 'antd';
const Test = ({ children }: { children: JSX.Element }) => {
  console.log(123);
  return (
    <div>
      <Button {...{ type: 'primary' }}>123{children}</Button>
    </div>
  );
};

export default Test;
