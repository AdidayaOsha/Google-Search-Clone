import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  const searchArr = ["/search", "/images", "/news"];
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {searchArr.map((path, index) => (
            <Route path={path} element={<SearchPage />} key={index} />
          ))}
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
