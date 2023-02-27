import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Authentication from './Components/pages/Authentication'
import MachineLearning from './Components/pages/MachineLerning';
import Hosting from './Components/pages/Hosting';
import Functions from './Components/pages/Functions';
import Database from './Components/pages/DataBase';
import Storage from './Components/pages/Storage';
import {  ThemeProvider } from '@mui/material/styles'
import DashBordTheme from './DashBordTheme';
ReactDOM.render(
  <ThemeProvider theme={DashBordTheme}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="authentication" element={<Authentication />} />
        <Route path="database" element={<Database />} />
        <Route path="functions" element={<Functions />} />
        <Route path="hosting" element={<Hosting />} />
        <Route path="machine-learning" element={<MachineLearning />} />
        <Route path="storage" element={<Storage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
