export const ADD_POST = "ADD_POST";
export const addPostAction = (posts) => {
    return {
        type: "ADD_POST",
        payload: posts
    }
}
export const FETCH_POST = "FETCH_POST";
export const fetchPostsAction = (posts) => {
    return {
        type: "FETCH_POST",
        payload: posts
    }
}
export const DELETE_POST = "DELETE_POST";
export const deletePostAction = (posts) => {
    return {
        type: "DELETE_POST",
        payload: posts
    }
}
