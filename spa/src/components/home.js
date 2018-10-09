import React, { Component } from 'react';
import Posts from './posts';

class Home extends Component {
    render() {
        return (
            <Posts history={this.props.history}/>
        );
    }
}

export default Home;