import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ icon, color, click, value, text }) => {
  const classes = ['btn', 'btn-md', 'm-2'];
  classes.push(color);

  let btnText = icon ? <FontAwesomeIcon icon={icon} size='xs' /> : text;
  return (
    <button
      className={classes.join(' ')}
      onClick={click}
      disabled={value === 0 ? 'disabled' : ''}
    >
      {btnText}
    </button>
  );
};

export default Button;
