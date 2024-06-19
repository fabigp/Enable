import React, { useState, useContext } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { AuthContext } from "./AuthProvider"; // Importar el contexto de autenticación

const BlogEditor = () => {
  const { authToken } = useContext(AuthContext); // Obtener el token de autenticación del contexto
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [topics, setTopics] = useState("");

  const handleSave = async () => {
    const post = {
      author: authToken, // Usar authToken como el autor del post
      title,
      body: content,
      likes: [],
      dislikes: [],
      reports: [],
      topics: topics.split(",").map((topic) => topic.trim()),
      rating_people: [],
      rating: [],
      institutions: [],
      comments: [],
      date: new Date().toISOString(),
    };

    try {
      console.log("Sending post:", post);
      const response = await axios.post("http://localhost:8000/post/", post, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert("Post saved successfully!");
      console.log(response.data);
    } catch (error) {
      console.error(
        "Error saving post:",
        error.response?.data || error.message
      );
      alert("Failed to save post");
    }
  };

  return (
    <div>
      <h1>Create a New Blog Post</h1>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <ReactQuill
        value={content}
        onChange={setContent}
        modules={modules}
        formats={formats}
      />
      <input
        type="text"
        placeholder="Topics (comma separated)"
        value={topics}
        onChange={(e) => setTopics(e.target.value)}
      />
      <button onClick={handleSave}>Save Post</button>
    </div>
  );
};

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ script: "sub" }, { script: "super" }],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    ["link", "image", "video"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "font",
  "list",
  "bullet",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "script",
  "color",
  "background",
  "align",
  "link",
  "image",
  "video",
];

export default BlogEditor;
