import * as I from "./InputStyle";
import React, { forwardRef } from "react";

const Input = forwardRef(({ title, type, name, value, placeholder, onChange }, ref) => {
  return (
    <I.Input>
      <I.Title>{title}</I.Title>
      <I.Content type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} ref={ref} />
    </I.Input>
  );
});

export default Input;
