import {Route, Routes} from "react-router-dom";
import "./App.css";
import IssueBook from "./components/issueBook/IssueBook";
import TestConnectivity from "./pages/TestConnectivity";
import StaticPage from "./pages/StaticPage";
import Header from './components/Header';
import SignUp from "./components/Login/SignUp";
import Login from "./components/Login/Login";
import Authentication from "./components/Login/Authentication";

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
    return (
        <div className="app">
            <Header/>
            <Routes>
                <Route path="/" element={<SignUp/>}></Route>
                <Route path="/login" element ={<Login/>}></Route>
                <Route path="/issuebook" element={<IssueBook/>}></Route>
                <Route path="/authenticate" element={<Authentication />}></Route>
            </Routes>
        </div>
    );
}

export default App;
