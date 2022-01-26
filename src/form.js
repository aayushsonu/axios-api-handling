import React, { useState } from "react";
import { createPost, updatePost } from "./coreapicalls";

const Formfiller = ({ reqType = "POST" }) => {
  const [values, setValues] = useState({
    title: "",
    body: "",
  });

  const { title, body } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (title && body && reqType === "POST") {
      createPost(title, body).then((data) => {
        console.log(data);
        setValues({ title: "", body: "" });
      });
    }

    if (title && body && reqType === "Update") {
      let id = window.location.pathname.split("/")[2];
      updatePost(title, body, id).then((data) => {
        console.log(data);
        setValues({ title: "", body: "" });
      });
    }
  };

  return (
    <div>
      <h1>{reqType} Data</h1>
      <form>
        <label htmlFor="title">Title </label>
        <input type="text" value={title} onChange={handleChange("title")} />
        <br />
        <br />
        <label htmlFor="body">Body </label>
        <input type="text" value={body} onChange={handleChange("body")} />
        <br />
        <br />
        <button onClick={onSubmit}>{reqType}</button>
      </form>
    </div>
  );
};

export default Formfiller;
