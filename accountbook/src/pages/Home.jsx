import * as H from "./HomeStyle";
import Menu from "../components/home/Menu";
import Month from "../components/home/Month";
import Chart from "../components/home/Chart";
import Content from "../components/home/Content";
import { useState } from "react";

import fakeData from "../fakeData.json";

function Home() {
  const [items, setItems] = useState(fakeData);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);

  const addItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

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
