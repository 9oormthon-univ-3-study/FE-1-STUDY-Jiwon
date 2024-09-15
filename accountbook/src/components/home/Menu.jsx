import * as M from "./MenuStyle";
import Input from "./Input";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function Menu({ addItem }) {
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [formData, setFormData] = useState({
    date: getCurrentDate(),
    item: "",
    amount: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 유효성 검증
    if (!formData.date || !formData.item || !formData.amount || !formData.description) {
      alert("모든 항목을 입력하세요.");
      return;
    }

    // 새로운 항목 추가
    const newItem = {
      id: uuidv4(),
      ...formData,
      amount: parseInt(formData.amount, 10),
    };
    addItem(newItem);

    // 입력값 초기화
    setFormData({
      date: getCurrentDate(),
      item: "",
      amount: "",
      description: "",
    });
  };

  return (
    <M.Menu>
      <M.Container onSubmit={handleSubmit}>
        <Input
          title="날짜"
          type="text"
          name="date"
          placeholder="YYYY-MM-DD"
          value={formData.date}
          onChange={handleChange}
        />
        <Input
          title="항목"
          type="text"
          name="item"
          placeholder="지출 항목"
          value={formData.item}
          onChange={handleChange}
        />
        <Input
          title="금액"
          type="number"
          name="amount"
          placeholder="지출 금액"
          value={formData.amount}
          onChange={handleChange}
        />
        <Input
          title="내용"
          type="text"
          name="description"
          placeholder="지출 내용"
          value={formData.description}
          onChange={handleChange}
        />
        <M.Button type="submit">저장</M.Button>
      </M.Container>
    </M.Menu>
  );
}

export default Menu;
