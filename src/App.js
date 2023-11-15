import React from 'react';
import './App.css';
import Header from './header';
import Login from './Login'; 
import Register from './Register';
import NewPost from './NewPost';
import Home from './home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="content">
          <Routes>
          <Route path="/" element={<Home/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/new-post" element={<NewPost/>} />
            
            {/* Add more routes for different pages */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
