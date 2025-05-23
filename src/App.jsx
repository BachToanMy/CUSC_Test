import Login from "./pages/login";
import {Routes, Route } from "react-router-dom";
import Students from "./pages/students";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/students" element={<Students/>}/>
    </Routes>
  )
}

export default App;
