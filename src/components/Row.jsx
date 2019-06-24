import React from 'react';
import Button from './Button';
import Badge from './Badge';
import { faPlus, faMinus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Consumer } from '../context';

const Row = ({ value, id }) => {
  return (
    <Consumer>
      {context => {
        const { addCounter, minusCounter, deleteCounter } = context.state;
        console.log(value);
        return (
          <div>
            <Badge value={value} />
            <Button
              icon={faPlus}
              color='btn-secondary'
              click={() => addCounter(id)}
            />
            <Button
              icon={faMinus}
              color='btn-secondary'
              click={() => minusCounter(id)}
              value={value}
            />
            <Button
              icon={faTimes}
              color='btn-danger'
              click={() => deleteCounter(id)}
            />
          </div>
        );
      }}
    </Consumer>
  );
};

export default Row;
