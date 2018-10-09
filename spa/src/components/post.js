import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as postActions from '../actions/postActions';
import PropTypes from 'prop-types';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: ""
        }
    }

    handleTitleChange(event) {
        this.setState({
            title: event.target.value
        });
    }

    handleDescriptionChange(event) {
        this.setState({
            description: event.target.value
        });
    }

    handleOnClickButton(event) {
        this.props.postActions.createPost({title: this.state.title, description: this.state.description})
    }

    componentWillUnmount() {
        this.setState({
            title: "",
            description: ""
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        var finishCreatePost = nextProps.finishCreatePost;
        var successOnSave = nextProps.successOnSave;

        if(finishCreatePost === true && successOnSave === true) {
            this.props.history.push("/");
            return false;
        }

        return true
    }

    render() {
        return (
            <div>
                <span> Título </span>
                <br />
                <input type="text" value={this.state.title} onChange={(e) => this.handleTitleChange(e)}/>

                <br />
                <span> Descrição </span>
                <br />
                <textarea rows="4" cols="50" value={this.state.description} onChange={(e) => this.handleDescriptionChange(e)}/ >

                <br />
                <button onClick={(e) => this.handleOnClickButton(e)}> Salvar </button>
                <span> {this.props.finishCreatePost === true && this.props.successOnSave === false ? "An error occurs when save the post" : ""} </span>
            </div>
        );
    }
}

Post.propTypes = {
    postActions: PropTypes.object,
    successOnSave: PropTypes.bool,
    finishCreatePost: PropTypes.bool
};

function mapStateToProps(state) {
    return {
        successOnSave: state.postReducer.successOnSave,
        finishCreatePost: state.postReducer.finishCreatePost
    };
}

function mapDispatchToProps(dispatch) {
    return {
        postActions: bindActionCreators(postActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Post);
