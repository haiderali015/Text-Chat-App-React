import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Chat from "./chat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/app" element={<Chat />} />
      <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;