import API from "../../API"
import {fetchPostsAction, addPostAction, deletePostAction} from "./actions";

const api = new API();

export const fetchPosts = () => {
    return async (dispatch) => {
        return api.getPosts()
            .then((posts) => {
                dispatch(fetchPostsAction(posts))
            }).catch((error) => {
                alert("Failed to connect API: /posts/")
            })
    }
}

export const deletePost = (id) => {
    return async (dispatch, getState) => {
        return api.deletePost(id)
            .then((response) => {
                const prevPosts = getState().posts.list
                const nextPosts = prevPosts.filter(post => post.id !== id)
                dispatch(deletePostAction(nextPosts))
            }).catch((error) => {
                alert("Failed to connect API to delete a post")
                console.log(error);
            })
   }
}

export const addPost = (name, body, image) => {
    return async (dispatch, getState) => {
        // Validation
        if (name === "" || body === "") {
            alert("Please fill out name and body.")
            return false
        }

        return api.addPost(name, body, image)
            .then((post) => {
                const prevPosts = getState().posts.list
                const nextPosts = [post, ...prevPosts]
                dispatch(addPostAction(nextPosts))
            }).catch((error) => {
                alert("Failed to connect API to add a post")
                console.log(error);
            })
   }
}
