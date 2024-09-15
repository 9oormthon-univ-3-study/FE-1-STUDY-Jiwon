import * as I from "./InputStyle";

function Input({ title, type, name, value, placeholder, onChange }) {
  return (
    <I.Input>
      <I.Title>{title}</I.Title>
      <I.Content type={type} name={name} value={value} placeholder={placeholder} onChange={onChange}></I.Content>
    </I.Input>
  );
}

export default Input;
