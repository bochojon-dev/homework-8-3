import { Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./components/create/Create";
import Navbar from "./components/navbar/Navbar";
import AllUsers from "./router/all-users/AllUsers";
import CreateUser from "./router/create-user/CreateUser";
import Home from "./router/home/Home";

function App() {
  return (
    <>
      <Navbar />
      <Create />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/all-users" element={<AllUsers />} />
      </Routes>
    </>
  );
}

export default App;
