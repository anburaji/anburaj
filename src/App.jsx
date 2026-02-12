import { Routes, Route } from "react-router-dom";
import AR_valentine from "./components/AR_valentine";
import AR_insidepage from "./components/AR_insidepage";
import AR_heart from "./components/AR_heart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AR_valentine />} />
      <Route path="/AR_insidepage" element={<AR_insidepage />} />
      <Route path="/AR_heart" element={<AR_heart />} />
    </Routes>
  );
}

export default App;
