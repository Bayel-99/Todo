import React from "react";

const Input = ({ type, onChange, value, ...rest }) => {
  return (
    <div>
      <input type={type} onChange={onChange} value={value} {...rest} />
    </div>
  );
};

export default Input;
