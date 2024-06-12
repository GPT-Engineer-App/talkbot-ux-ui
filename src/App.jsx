import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Create from "./pages/Create.jsx";
import Settings from "./pages/Settings.jsx";
import Preview from "./pages/Preview.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/settings" element={<Settings />} />
          <Route exact path="/preview" element={<Preview />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;