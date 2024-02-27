import React from 'react';
import './App.css';
import Home from './components/HomeComponent';
import Quiz from './components/QuizComponent';
import Result from './components/ResultComponent';

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