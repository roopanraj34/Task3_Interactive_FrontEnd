import React from 'react';
import './Header.css';

function Header({ user }) {
  return (
    <header className="header">
      <div id="username-header" className="username"></div>
      <div className="logo">
        <h1>My Blog</h1>
      </div>
      <div className="header">
        {user && (
          <div className="user-profile">
            <span className="user-username">{user.username}</span>
            {/* Other user information */}
          </div>
        )}
      </div>
      <nav className="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/new-post">New Post</a></li>
          <li><a href="/register">Register</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
