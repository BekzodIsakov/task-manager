import React from "react";

const Input = ({ className, value, onChange, ...otherProps }, props) => {
  return (
    <div className=''>
      <input
        onChange={onChange}
        value={value}
        type='text'
        className={`w-full p-1 mt-1 rounded-md ${className}`}
        {...otherProps}
      />
    </div>
  );
};

export default Input;
