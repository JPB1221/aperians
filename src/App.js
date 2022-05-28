import { Route, Routes } from "react-router-dom";
import Index from "./components/views/home";
import Disclaimer from "./components/views/terms/Disclaimer";
import Terms from "./components/views/terms/Terms";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/terms_and_conditions" element={<Terms />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
    </>
  );
}

export default App;
