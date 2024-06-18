import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Configuration from "./pages/Configuration";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/config" element={<Configuration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
