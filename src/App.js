import React from "react";
import Header from './components/Header/Header'
import Pages from "./components/Pages";
import { BrowserRouter as Router } from 'react-router-dom';
import './Scss/styled.scss';

function App() {
  return (
    <Router>
      <Header />
      <Pages />
    </Router>
  );
}

export default App;
