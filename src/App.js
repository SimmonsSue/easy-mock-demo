/*
 * @Description: 
 * @Version: 
 * @Author: xinmou_su
 * @Date: 2019-08-15 16:04:36
 * @LastEditors: xinmou_su
 * @LstEditTime: Do not Edit
 */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Data } from "./component/Data";
function App() {
  return (
    <div className="App">
      <Data></Data>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
