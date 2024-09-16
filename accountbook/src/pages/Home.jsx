import React from "react";
import * as H from "./HomeStyle";
import Menu from "../components/home/Menu";
import Month from "../components/home/Month";
import Chart from "../components/home/Chart";
import Content from "../components/home/Content";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../features/items/itemsSlice";

function Home() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const [selectedMonth, setSelectedMonth] = React.useState(new Date().getMonth() + 1);

  // 새 항목 추가 함수
  const handleAddItem = (newItem) => {
    dispatch(addItem(newItem)); // Redux 액션 디스패치
  };

  // 선택한 월을 관리하는 함수
  const handleMonthSelect = (month) => {
    setSelectedMonth(month);
  };

  return (
    <H.Home>
      <Menu addItem={handleAddItem} />
      <Month onMonthSelect={handleMonthSelect} />
      <Chart selectedMonth={selectedMonth} items={items} />
      <Content items={items} selectedMonth={selectedMonth} />
    </H.Home>
  );
}

export default Home;
