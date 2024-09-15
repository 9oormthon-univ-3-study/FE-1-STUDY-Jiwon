import * as I from "./ItemStyle";

function Item({ date, item, description, amount }) {
  return (
    <I.Container>
      <I.Content>
        <I.Date>{date}</I.Date>
        <I.Title>
          {item} - {description}
        </I.Title>
      </I.Content>
      <I.Amount>{amount} 원</I.Amount>
    </I.Container>
  );
}

export default Item;
