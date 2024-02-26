import React from 'react';
import './App.css';
import Home from './components/home';
import Quiz from './components/quiz';
import Result from './components/result';

function App() {
  return (
    <div className="App">
      <Home/>
      <Quiz/>
      <Result/>
    </div>
  );
}

export default App;