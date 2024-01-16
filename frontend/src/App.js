import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/shared/Navigation/Navigation";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/register" exact element={<Register/>}/>
        <Route path="/login" exact element={<Login/>}/>
        {/* <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
