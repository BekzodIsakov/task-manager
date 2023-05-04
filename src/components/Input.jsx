import React from "react";

const Input = ({ className, ...otherProps }, props) => {
  return (
    <div className=''>
      <input type='text' className={`w-full p-1 mt-1 rounded-md ${className}`} {...otherProps} />
    </div>
  );
};

export default Input;
