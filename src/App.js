import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import IssueBook from "./components/issueBook/IssueBook";
import Header from './components/Header';

function App() {
  return (
    <div className="app">
      <IssueBook />
    </div>
  );
}

export default App;
