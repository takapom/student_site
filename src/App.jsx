import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';  
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import Login from './components/Login';
import Logout from './components/Logout';
import Navbar from './components/Navbar';



function App(){
  //ローカルストレージを管理
  const [IsAuth, setIsAuth] = useState(false);
  return (
  <Router>
    <Navbar IsAuth={IsAuth}/>
    <Routes>
     <Route path="/" element={<Home />}></Route>
     <Route path="/createpost" element={<CreatePost />}></Route>
     <Route path="/login" element={<Login setIsAuth={setIsAuth} />}></Route>
     <Route path="/logout" element={<Logout setIsAuth={setIsAuth}/>}></Route>
    </Routes>
  </Router>
  );
}

export default App;