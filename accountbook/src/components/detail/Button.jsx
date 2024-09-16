import * as B from "./ButtonStyle";

function Button({ text, onClick, color }) {
  return (
    <B.Button color={color} onClick={onClick}>
      {text}
    </B.Button>
  );
}

export default Button;
