import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { NotFound } from "./pages/NotFound";
import { Search } from "./pages/Search";
import { SearchResults } from "./pages/SearchResults";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="search" element={<Search />} />
        <Route path="search-results" element={<SearchResults />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
