import * as C from "./ContentStyle";
import Item from "./Item";
import { Link } from "react-router-dom";

function Content({ items, selectedMonth }) {
  const filteredItems = selectedMonth
    ? items.filter((item) => {
        const itemMonth = new Date(item.date).getMonth() + 1;
        return itemMonth === selectedMonth;
      })
    : [];

  return (
    <C.Content>
      <C.Container>
        {filteredItems.length > 0 ? (
          filteredItems.map((data) => (
            <Link key={data.id} to={`/detail/${data.id}`} style={{ textDecoration: "none" }}>
              <Item date={data.date} item={data.item} description={data.description} amount={data.amount} />
            </Link>
          ))
        ) : (
          <C.None>지출이 없습니다.</C.None>
        )}
      </C.Container>
    </C.Content>
  );
}

export default Content;
