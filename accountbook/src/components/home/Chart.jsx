import * as C from "./ChartStyle";
import Graph from "./Graph";

function Chart({ items, selectedMonth }) {
  const filteredItems = selectedMonth
    ? items.filter((item) => {
        const itemMonth = new Date(item.date).getMonth() + 1;
        return itemMonth === selectedMonth;
      })
    : [];

  const totalAmount = filteredItems.reduce((total, item) => total + item.amount, 0);

  return (
    <C.Chart>
      <C.Title>
        {selectedMonth}월 총 지출: {totalAmount.toLocaleString()}원
      </C.Title>
      <Graph items={filteredItems} />
    </C.Chart>
  );
}

export default Chart;
