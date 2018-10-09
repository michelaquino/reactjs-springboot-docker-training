import { CREATE_POST_START, CREATE_POST_SUCCESS, CREATE_POST_ERROR, LOAD_POSTS_SUCCESS, LOAD_POSTS_START, LOAD_POSTS_ERROR } from "../actions/actionTypes";
import initialState from './initialState';

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_POST_START:
        return Object.assign({}, state, { finishCreatePost: false });
    case CREATE_POST_SUCCESS:
        return Object.assign({}, state, { successOnSave: true, finishCreatePost: true });
    case CREATE_POST_ERROR:
        return Object.assign({}, state, { successOnSave: false, finishCreatePost: true });
    case LOAD_POSTS_START:
        return Object.assign({}, state, { errorOnLoadPosts: false, finishCreatePost: false});
    case LOAD_POSTS_SUCCESS:
        return Object.assign({}, state, { posts: action.posts});
    case LOAD_POSTS_ERROR:
        return Object.assign({}, state, { errorOnLoadPosts: true});
    default:
        return state;
    }
}


