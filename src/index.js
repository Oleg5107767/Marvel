import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import RandomChar from './components/randomChar/RandomChar';


import './style/style.scss';



//ограничить комиксы , приходит 10(5), бывает не т комиксов (сделать проверку и выводить что их нет)
// заглушка должна расстягиватся нормально 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

