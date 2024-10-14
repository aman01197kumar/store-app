import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import SignUpPage from "./screens/SignUpPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
