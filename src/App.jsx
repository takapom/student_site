import React, { useState } from 'react'
import Main from './components2/Main.jsx';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';  
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import Login from './components/Login';
import Logout from './components/Logout';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from './components2/Navibar';
import Program from './components2/Program';
import Hunthing from './components2/Hunthing.jsx';

function App(){
  //ローカルストレージを管理
  const [IsAuth, setIsAuth] = useState(false);
  return (
    // componentsのコンポーネント
    <Router>
      <Navbar IsAuth={IsAuth}/>
      <Routes>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/createpost" element={<CreatePost />}></Route>
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />}></Route>
        <Route path="/logout" element={<Logout setIsAuth={setIsAuth}/>}></Route>
        {/* components2 のページ */}
        <Route path="/navibar" element={<Navibar />} />
        <Route path="/program" element={<Program />} />
        <Route path="/hunthing" element={<Hunthing />} />
      </Routes>
    </Router>
  )
}

export default App;