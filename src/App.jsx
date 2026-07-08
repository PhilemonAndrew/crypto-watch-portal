import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Trackers from "./pages/Trackers";
import Settings from "./pages/Settings";

function App() {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/trackers" element={<Trackers />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>

      <footer className="footer">
        <p>
          CryptoWatch Live Analytics Portal © 2026
        </p>
      </footer>
    </>
  );
}

export default App;