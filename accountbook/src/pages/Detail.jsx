import React, { useRef, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../components/Detail/Button";
import Input from "../components/Detail/Input";
import * as D from "./DetailStyle";
import { ItemsContext } from "../context/ItemsContext";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { items, setItems } = useContext(ItemsContext);

  const dateRef = useRef(null);
  const itemRef = useRef(null);
  const amountRef = useRef(null);
  const descriptionRef = useRef(null);

  const item = items.find((item) => item.id === id);

  useEffect(() => {
    if (item) {
      dateRef.current.value = item.date;
      itemRef.current.value = item.item;
      amountRef.current.value = item.amount;
      descriptionRef.current.value = item.description;
    }
  }, [item]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleSave = () => {
    if (item) {
      const updatedItem = {
        ...item,
        date: dateRef.current.value,
        item: itemRef.current.value,
        amount: Number(amountRef.current.value),
        description: descriptionRef.current.value,
      };

      const updatedItems = items.map((i) => (i.id === id ? updatedItem : i));
      setItems(updatedItems);

      navigate("/");
    }
  };

  const handleDelete = () => {
    const confirmed = window.confirm("지출 항목을 삭제하시겠습니까?");
    if (confirmed) {
      const updatedItems = items.filter((i) => i.id !== id);
      setItems(updatedItems);
      navigate("/");
    }
  };

  return (
    <D.Detail>
      <D.Container>
        <Input title="날짜" type="text" name="date" ref={dateRef} placeholder="YYYY-MM-DD" />
        <Input title="항목" type="text" name="item" ref={itemRef} placeholder="지출 항목" />
        <Input title="금액" type="number" name="amount" ref={amountRef} placeholder="지출 금액" />
        <Input title="내용" type="text" name="description" ref={descriptionRef} placeholder="지출 내용" />
        <D.ButtonContainer>
          <Button text="수정" onClick={handleSave} />
          <Button text="삭제" color="rgb(199,85, 84)" onClick={handleDelete} />
          <Button text="뒤로가기" onClick={handleBack} color="rgb(204,194,195)" />
        </D.ButtonContainer>
      </D.Container>
    </D.Detail>
  );
};

export default Detail;
