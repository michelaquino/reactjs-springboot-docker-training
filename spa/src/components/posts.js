import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as postActions from '../actions/postActions';
import PropTypes from 'prop-types';
import { Table, Button } from 'react-bootstrap';

class Posts extends Component {
    componentWillMount() {
        this.props.postActions.loadPosts();
    }

    renderPosts() {
        return this.props.posts.map(post => (
            <tr key={post.id}>
                <td>
                    { post.id }
                </td>
                <td>
                    { post.title }
                </td>
                <td>
                    { post.description }
                </td>
            </tr>
        ))
    }

    handleClickNewPost() {
        this.props.history.push("/createPost");
    }

    renderError() {
        return (
            <tr>
                <td colSpan="3">
                    An error occur when load the posts
                </td>
            </tr>
        )
    }

    renderNoData() {
        return (
            <tr>
                <td colSpan="3">
                    No Data
                </td>
            </tr>
        )
    }

    render() {
        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Post Title</th>
                            <th>Post Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.errorOnLoadPosts ?
                                this.renderError()
                                :
                                this.props.posts.length > 0 ?
                                this.renderPosts()
                                :
                                this.renderNoData()
                        }
                    </tbody>
                </Table>
                <Button
                    variant="primary"
                    type="button"
                    onClick={() => this.handleClickNewPost()}>
                    New Post
                </Button>
            </div>
        );
    }
}

Posts.propTypes = {
    postActions: PropTypes.object,
    posts: PropTypes.array,
    errorOnLoadPosts: PropTypes.bool
};

function mapStateToProps(state) {
    return {
        posts: state.postReducer.posts,
        errorOnLoadPosts: state.postReducer.errorOnLoadPosts,
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
)(Posts);
