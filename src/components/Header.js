import React from 'react';

const Header = ({ isAuthenticated, handleLogout }) => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          {isAuthenticated ? (
            <>
              <li><a href="/dashboard">Dashboard</a></li>
              <li><button onClick={handleLogout}>Logout</button></li>
            </>
          ) : (
            <>
              <li><a href="/login">Login</a></li>
              <li><a href="/signup">Signup</a></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;