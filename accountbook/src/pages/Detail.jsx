import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as D from "./DetailStyle";
import Input from "../components/detail/Input";
import Button from "../components/detail/Button";

import fakeData from "../fakeData.json";

function Detail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const foundItem = fakeData.find((data) => data.id === id);
    if (foundItem) {
      setItem(foundItem);
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  return (
    <D.Detail>
      <D.Container>
        <Input title="날짜" type="text" name="date" placeholder="YYYY-MM-DD" onChange={handleChange} />
        <Input title="항목" type="text" name="item" placeholder="지출 항목" onChange={handleChange} />
        <Input title="금액" type="number" name="amount" placeholder="지출 금액" onChange={handleChange} />
        <Input title="내용" type="text" name="description" placeholder="지출 내용" onChange={handleChange} />
        <D.ButtonContainer>
          <Button>수정</Button>
          <Button>삭제</Button>
          <Button>뒤로 가기</Button>
        </D.ButtonContainer>
      </D.Container>
    </D.Detail>
  );
}

export default Detail;
