import axios from "axios";

var baseURL;
if (process.env.REACT_APP_ENVIRONMENT && process.env.REACT_APP_ENVIRONMENT === "PRODUCTION") {
    baseURL = process.env.REACT_APP_API_BASE_URL;
} else {
    baseURL = "http://127.0.0.1:8000";
}

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default class API {
    getPosts = async () => {
        const posts = await api
            .get("/posts/")
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                throw new Error(error)
            })
        return posts
    }
    addPost = async (name, body, image) => {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("body", body);
        formData.append("image", image);
        const savedPost = await api
            .post("/posts/add/", formData)
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                throw new Error(error)
            })
        return savedPost
    }
    deletePost = async (id) => {
        const response = await api
            .delete("/posts/delete/" + id + "/")
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                throw new Error(error)
            })
        return response
    }
}