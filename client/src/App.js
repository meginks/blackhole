import React from 'react';
import withAuthenticate from './components/withAuthenticate';
import './App.css';
import Home from './components/Home.js';
import Login from './components/Login.js';

const AuthenticatedApp = withAuthenticate(Home)(Login); 


function App() {
  return (
    <div className="App">
     <AuthenticatedApp />
    </div>
  );
}

export default App;


