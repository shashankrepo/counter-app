import React from 'react';
import Row from './Row';
import { Consumer } from '../context';
import Button from './Button';

const Counter = () => {
  return (
    <Consumer>
      {context => {
        const { counter, resetCounter } = context.state;
        return (
          <div className='m-5'>
            <Button text={'RESET'} color='btn-primary' click={resetCounter} />
            {counter.map(el => (
              <Row value={el.value} id={el.id} />
            ))}
          </div>
        );
      }}
    </Consumer>
  );
};

export default Counter;
