import React from 'react';

const Button = ({ type="submit", onClick, children }) => {
  return (
    <button type={type} onClick={onClick} className='btn btn-primary btn-block'>
        {children}
    </button>
  );
};

export default Button;
