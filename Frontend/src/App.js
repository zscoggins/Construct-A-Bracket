import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import Home from '../pages/Home';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Dashboard from '../pages/Dashboard';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const response = await axios.get('/users/me', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          setUser(response.data);
          setIsAuthenticated(true);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login setIsAuthenticated={setIsAuthenticated} />
        </Route>
        <Route path="/signup">
          <Signup setIsAuthenticated={setIsAuthenticated} />
        </Route>
        <Route path="/dashboard">
          <Dashboard user={user} setUser={setUser} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
