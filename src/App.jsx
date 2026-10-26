import { Routes, Route, Link } from "react-router-dom";
import HomeBasics from "./pages/HomeBasics";
import HooksDemo from "./pages/HooksDemo";
import FormFetchDemo from "./pages/FormFetchDemo";

export default function App() {
  return (
    <div
      style={{ fontFamily: "sans-serif", margin: "0 auto", maxWidth: "700px" }}
    >
      {/* Navigasi / React Router Links */}
      <nav
        style={{
          padding: "10px",
          borderBottom: "2px solid #333",
          display: "flex",
          gap: "15px",
        }}
      >
        <Link to="/">1-7. Dasar React</Link>
        <Link to="/hooks">8. Hooks</Link>
        <Link to="/form-fetch">9-11. Redux, Form & API</Link>
      </nav>

      {/* Route Views */}
      <Routes>
        <Route path="/" element={<HomeBasics />} />
        <Route path="/hooks" element={<HooksDemo />} />
        <Route path="/form-fetch" element={<FormFetchDemo />} />
      </Routes>
    </div>
  );
}
