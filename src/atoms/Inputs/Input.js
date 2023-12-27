import React, { useRef } from 'react';

const Input = React.forwardRef(({ type, placeholder, onChange, value }, ref) => {
  const handleChange = (event) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <input
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      ref={ref}
      className='form-control m-2'
    />
  );
});

export default Input;
