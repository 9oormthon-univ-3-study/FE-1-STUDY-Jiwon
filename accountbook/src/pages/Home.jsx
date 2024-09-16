import * as H from "./HomeStyle";
import Menu from "../components/home/Menu";
import Month from "../components/home/Month";
import Chart from "../components/home/Chart";
import Content from "../components/home/Content";
import { useState } from "react";

function Home({ items, setItems }) {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);

  // 새 항목 추가 함수
  const addItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  // 선택한 월을 관리하는 함수
  const handleMonthSelect = (month) => {
    setSelectedMonth(month);
  };

  return (
    <H.Home>
      <Menu addItem={addItem} />
      <Month onMonthSelect={handleMonthSelect} />
      <Chart selectedMonth={selectedMonth} items={items} />
      <Content items={items} selectedMonth={selectedMonth} />
    </H.Home>
  );
}

export default Home;
