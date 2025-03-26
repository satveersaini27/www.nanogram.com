import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Post from './pages/Post';
import Explore from './pages/Explore';
import AITools from './pages/AITools';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/profile/:username" component={Profile} />
          <PrivateRoute path="/post/:id" component={Post} />
          <PrivateRoute path="/explore" component={Explore} />
          <PrivateRoute path="/ai-tools" component={AITools} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;