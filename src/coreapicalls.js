import axios from "axios";
import { useState } from "react";

const api = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com/`,
});

export const createPost = (t, b) => {
  return api
    .post(
      "/posts",
      {
        title: t,
        body: b,
      },
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
    .then((res) => console.log("post created successfully"))
    .catch((err) => console.log(err));
};
export const updatePost = (t, b, id) => {
  return api
    .put(
      `/posts/${id}`,
      {
        id: id,
        title: t,
        body: b,
      },
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
    .then((res) => console.log("post updated successfully"))
    .catch((err) => console.log(err));
};

export const deletePost = (id) => {
  return api
    .delete(`/posts/${id}`)
    .then((res) => {
      console.log("post deleted successfully");
    })
    .catch((err) => console.log(err));
};
