import * as G from "./GraphStyle";

function Graph({ items }) {
  // 색상 배열 정의
  const colors = ["#ed8e89", "#f7b685", "#f3eba5", "#94c691", "#98d6d9", "#b4abe0", "#BDC3C7"];

  // 항목을 그룹화하고, 퍼센트로 변환하며, 색상을 매핑하고 정렬하는 함수
  function processItems(items) {
    const totalAmount = items.reduce((sum, item) => sum + item.amount, 0);

    // 항목 그룹화
    const grouped = items.reduce((acc, item) => {
      acc[item.item] = (acc[item.item] || 0) + item.amount;
      return acc;
    }, {});

    // 퍼센트 변환 및 필터링
    let processedItems = Object.entries(grouped)
      .map(([item, amount]) => ({
        item,
        amount,
        percentage: (amount / totalAmount) * 100,
      }))
      .filter((item) => item.amount > 0);

    // '기타' 항목 처리
    const threshold = 1;
    const others = processedItems.filter((item) => item.percentage < threshold);
    const othersTotal = others.reduce((sum, item) => sum + item.amount, 0);
    processedItems = processedItems.filter((item) => item.percentage >= threshold);

    if (othersTotal > 0) {
      processedItems.push({
        item: "기타",
        amount: othersTotal,
        percentage: (othersTotal / totalAmount) * 100,
        color: colors[colors.length - 1],
      });
    }

    // 색상 매핑 및 정렬
    return processedItems
      .map((item, index) => ({
        ...item,
        color: colors[index % (colors.length - 1)],
      }))
      .sort((a, b) => b.percentage - a.percentage);
  }

  const itemsWithColors = processItems(items);

  return (
    <G.Container>
      <G.Graph>
        {itemsWithColors.map((item, index) => (
          <G.Item key={index} style={{ width: `${item.percentage}%`, backgroundColor: item.color }}></G.Item>
        ))}
      </G.Graph>
      <G.Content>
        {itemsWithColors.map((item, index) => (
          <G.Label key={index}>
            <G.Color style={{ backgroundColor: item.color }}></G.Color>
            <G.Text>
              {item.item}: {item.amount}원 ({item.percentage.toFixed(2)}%)
            </G.Text>
          </G.Label>
        ))}
      </G.Content>
    </G.Container>
  );
}

export default Graph;
