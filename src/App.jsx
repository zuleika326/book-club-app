import "./App.css";
import HomePage from "./Components/HomePage";
import SignUpPage from "./Components/SignUpPage";
import LoginPage from "./Components/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Author from "./Components/Author";
import Books from "./Components/Books";
import Writers from "./Components/Writers";
import WritersList from "./Components/WritersList";
import EbooksPage from "./Components/EbooksPage"
import AudiobooksPage from "./Components/AudiobooksPage"
import PremiumLibraryPage from "./Components/PremiumLibraryPage"
import FreeContentPage from "./Components/FreeContentPage"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<HomePage/>} />
        <Route path="/SignUp"  element={<SignUpPage/>} />
        <Route path="/login"  element={<LoginPage/>} />
        <Route path="/authors"  element={<Author/>} />
        <Route path="/books"  element={<Books/>} />
        <Route path="/writers" element={<Writers/>} />
        <Route path="/writersList" element={<WritersList/>} />
        <Route path="/EbooksPage" element={<EbooksPage/>} />
        <Route path="/AudiobooksPage" element={<AudiobooksPage/>} />
        <Route path="/PremiumLibraryPage" element={<PremiumLibraryPage/>} />
        <Route path="/FreeContentPage" element={<FreeContentPage/>} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
