import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Author from "./pages/AuthorPage";
import Book from "./pages/BookPage";
// import AuthorBooks from "./pages/AuthorBooks";
import Home from "./pages/HomePage";
import BookDetails from "./components/bookdetails";
import APIContextProvider from "./context/APIContextProvider";
import AuthorBooks from "./pages/authorbooks";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <APIContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bookpage" element={<Book />} />
            <Route path="/authorpage" element={<Author />} />
            <Route path="/bookdetails/:bookId" element={<BookDetails />} />
            <Route path="/authorname/:authorname" element={<AuthorBooks />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </APIContextProvider>
    </>
  );
}

export default App;
