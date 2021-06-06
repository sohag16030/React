import React from 'react';


export const ClickOne = () => {
  const clickHander = () => {
    console.log('Clicked');
  };
  return (
    <div>
      <button onClick={()=>clickHander()}>Click</button>
    </div>
  )
}
