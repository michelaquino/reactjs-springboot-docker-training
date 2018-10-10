import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import Post from './components/post';
import { Container, Row, Col } from 'react-bootstrap';

const containerStyle = {
    "margin-top": "10px"
};

class App extends Component {
  render() {
    return (
        <div className="App">
            <Header />
            <Container style={containerStyle}>
                <Row>
                    <Col xs={12} md={12}>
                        <Route path="/" exact component={Home}/>
                        <Route path="/createPost" component={Post}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
  }
}

export default App;
