import * as M from "./MonthStyle";
import Button from "./Button";
import { useState } from "react";

function Month({ onMonthSelect }) {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);

  const handleMonthClick = (month) => {
    onMonthSelect(month);
    setSelectedMonth(month);
  };

  return (
    <M.Month>
      <M.Container>
        {[...Array(12)].map((_, index) => {
          const month = index + 1;
          return (
            <Button
              key={month}
              month={month}
              onClick={() => handleMonthClick(month)}
              isSelected={selectedMonth === month} // 선택된 달인지 여부를 전달
            />
          );
        })}
      </M.Container>
    </M.Month>
  );
}

export default Month;
