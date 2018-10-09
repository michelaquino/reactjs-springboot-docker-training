import * as types from "./actionTypes";

const apiUrl = "http://localhost:8080/posts";

export function loadPostsStart() {
  return {
      type: types.LOAD_POSTS_START
  };
}

export function loadPostsSuccess(posts) {
  return {
      type: types.LOAD_POSTS_SUCCESS,
      posts: posts
  };
}

export function loadPostsError() {
    return {
        type: types.LOAD_POSTS_ERROR
    }
}

export function createPostStart() {
    return {
        type: types.CREATE_POST_START
    }
}

export function createPostSuccess() {
    return {
        type: types.CREATE_POST_SUCCESS
    }
}

export function createPostError() {
    return {
        type: types.CREATE_POST_ERROR
    }
}

export function loadPosts() {
    return dispatch => {
        dispatch(loadPostsStart());
        apiRequest(apiUrl, "GET").then(result => {
            const posts = [];

            if(!result || result.occurError) {
                dispatch(loadPostsError());
                return;
            }

            if (result.posts.length === 0) {
                dispatch(loadPostsSuccess(posts));
                return;
            }

            for (const post of result.posts) {
                posts.push({
                    id: post.id,
                    title: post.title,
                    description: post.description,
                });
            }

            dispatch(loadPostsSuccess(posts));
        });
    };
}

export function createPost(post) {
    return dispatch => {
        dispatch(createPostStart());
        apiRequest(apiUrl, "POST", post).then(result => {
            if(!result || result.occurError) {
                dispatch(createPostError());
                return;
            }

            dispatch(createPostSuccess());
        });
    }
}

function apiRequest(url, method, body) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const options = {
        method: method,
        headers: headers,
        body: JSON.stringify(body)
    };

    return fetch(url, options)
        .then(function(response){
            return response.json();
        })
        .then(function(posts){
            return { occurError: false, posts: posts }
        })
        .catch(function(error){
            console.log("error: ", error);
            return { occurError: true, posts: [] }
        });
}
