// src/pages/Detail.jsx
import React, { useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../components/Detail/Button";
import Input from "../components/Detail/Input";
import * as D from "./DetailStyle";
import { useSelector, useDispatch } from "react-redux";
import { updateItem, deleteItem } from "../features/items/itemsSlice";
import { selectItemById } from "../features/items/itemsSelectors";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const item = useSelector(selectItemById(id));

  const dateRef = useRef(null);
  const itemRef = useRef(null);
  const amountRef = useRef(null);
  const descriptionRef = useRef(null);

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

      dispatch(updateItem(updatedItem));
      navigate("/");
    }
  };

  const handleDelete = () => {
    const confirmed = window.confirm("지출 항목을 삭제하시겠습니까?");
    if (confirmed) {
      dispatch(deleteItem(id));
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
