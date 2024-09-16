import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import fakedata from "./fakeData.json";
import { useState, useEffect } from "react";

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(fakedata);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home items={items} setItems={setItems} />} />
        <Route path="/detail/:id" element={<Detail items={items} setItems={setItems} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
