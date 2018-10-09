import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as postActions from '../actions/postActions';
import PropTypes from 'prop-types';
import PostInfo from './postInfo'

class Posts extends Component {
    componentWillMount() {
        this.props.postActions.loadPosts();
    }

    renderPosts() {
        return this.props.posts.map(post => (
            <li key={post.id}>
                <PostInfo post={post} />
            </li>
        ))
    }

    handleClickNewPost() {
        this.props.history.push("/createPost");
    }

    render() {
        return (
            <div>
                <button onClick={() => this.handleClickNewPost()}> Novo post </button>
                <ul>
                    {
                        this.props.errorOnLoadPosts ?
                            <div>
                                An error occur when load the posts
                            </div>
                            :
                                this.props.posts.length > 0 ?
                                    this.renderPosts()
                                    :
                                    <div className="">
                                        No Data
                                    </div>
                    }
                </ul>
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
