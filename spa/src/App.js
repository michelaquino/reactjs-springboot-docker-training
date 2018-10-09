import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import Post from './components/post';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Header />
            <Route path="/" exact component={Home}/>
            <Route path="/createPost" component={Post}/>
        </div>
    );
  }
}

export default App;
