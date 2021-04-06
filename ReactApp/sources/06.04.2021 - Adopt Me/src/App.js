import React from 'react';
import './App.css';
import ChooseAnimal from './components/ChooseAnimal/ChooseAnimal.js';

function App() {
  return (
    <React.Fragment>
      <img className="logo" src="./images/logo.png" alt="logo" />
      <ChooseAnimal />
    </React.Fragment>
  );
}

export default App;
