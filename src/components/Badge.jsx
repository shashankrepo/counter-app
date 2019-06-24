import React from 'react';

const Badge = ({ value }) => {
  const style = {
    fontSize: 20,
    fontWeight: 'bold'
  };

  let classes = [];
  if (value > 0) {
    classes = ['badge', 'badge-pill', 'badge-primary', 'col-1'];
  } else {
    classes = ['badge', 'badge-pill', 'badge-warning', 'col-1'];
  }

  const sum = value === 0 ? 'zero' : value;

  return (
    <span style={style} className={classes.join(' ')}>
      {sum}
    </span>
  );
};

export default Badge;
