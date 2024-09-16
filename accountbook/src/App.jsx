import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { ItemsProvider } from "./context/ItemsContext";

const App = () => {
  return (
    <BrowserRouter>
      <ItemsProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </ItemsProvider>
    </BrowserRouter>
  );
};

export default App;
