import "./App.css";
import HomePage from "./Components/HomePage";
import SignUpPage from "./Components/SignUpPage";
import LoginPage from "./Components/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Author from "./Components/Author";
import Books from "./Components/Books";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<HomePage/>} />
        <Route path="/SignUp"  element={<SignUpPage/>} />
        <Route path="/login"  element={<LoginPage/>} />
        <Route path="/authors"  element={<Author/>} />
        <Route path="/books"  element={<Books/>} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
