import React from "react";

const Button = ({ children, onClick, type, ...rest }) => {
  return (
    <div>
      <Button onClick={onClick} type={type} {...rest}>
        {children}
      </Button>
    </div>
  );
};

export default Button;
