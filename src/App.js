import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Single from "./pages/blogpost/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import SinglePost from "./components/singlepost/SinglePost";



function App() {

  const user = true;

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={user ? <Home/> : <Login />} />
        <Route path='/settings' element={user ? <Settings /> : <Signup/>} />
        <Route path='/signup' element={user ? <Home/> : <Signup />} />
        <Route path='/post/:postId' element={<Single />} />
        <Route path='/write' element={user ? <Write /> : <Signup/>} />
      </Routes>
    </Router>

  );
}

export default App;
