import * as B from "./ButtonStyle";

function Button({ month, onClick, isSelected }) {
  return (
    <B.Button onClick={onClick} $isSelected={isSelected}>
      {month}월
    </B.Button>
  );
}

export default Button;
