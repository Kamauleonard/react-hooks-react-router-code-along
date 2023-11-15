import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import NavBar from "./Navbar";
import About from "./About";

function App() {

  return (
    <div>
        <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/about" element= {<About/>}/>
      </Routes>
    </div>
  );
}

export default App;