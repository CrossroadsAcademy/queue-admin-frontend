import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Test/Test';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <Card img="https://avatars.githubusercontent.com/u/84835379?v=4" name="Ajmal Nasumudeen" phone="8891590046" />
    <Card img="https://avatars.githubusercontent.com/u/80631519?v=4" name="Saneen" phone="767645733" />
    <Card img="https://avatars.githubusercontent.com/u/64463148?v=4" name="Nasaf" phone="6776767" />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
