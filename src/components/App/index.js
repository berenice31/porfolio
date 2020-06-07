// == Import npm
import React from 'react';

// == Import
import Header from 'src/components/Header';
import Title from 'src/components/Title';
import Apropos from 'src/components/Apropos';
import './style.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Title />
    <Apropos />
  </div>
);

// == Export
export default App;
