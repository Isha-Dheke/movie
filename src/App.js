import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Account from './pages/Account'
import Login from "./pages/Login";
import Signup from './pages/Signup';

function App() {
  return (
    < >
   
    <Navbar/>
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path="/account" Component={Account}/>
      <Route path="/login" Component={Login}/>
      <Route path="/signup" Component={Signup}/>
    </Routes>
   
   
    </>
  );
}

export default App;
