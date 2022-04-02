import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import IssueBook from "./components/issueBook/IssueBook";
import TestConnectivity from "./pages/TestConnectivity";
import StaticPage from "./pages/StaticPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/test" element={<TestConnectivity />} />
          <Route path="/" element={ <IssueBook />} />
          <Route path="/static" element={<StaticPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
