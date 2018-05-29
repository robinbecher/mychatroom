import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
    constructor(){
        super();
        this.setupConnection();
    }

render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Robins shitty Chatroom</h1>
        </header>

          <textarea rows="20" cols="50" readOnly="true">

          </textarea><br/>

          <textarea rows="1" cols="25">
              Your Name
          </textarea><br/>

          <textarea rows="5" cols="50">
              Type your Message here!
          </textarea><br/>
          <button onClick="sendMessage()">
              Send
          </button>
      </div>
    );
  }

  setupConnection(){
    const io = require('socket.io-client');
      const socket = io('http://51.38.114.213:3000/');
      socket.on('connect', function(){});
      socket.on('event', function(data){});
      socket.on('disconnect', function(){});
    }

    sendMessage(){

    }
}

export default App;
