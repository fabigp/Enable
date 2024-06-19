import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import axios from "axios";

const Post = ({ post }) => {
  const { authToken } = useContext(AuthContext);
  const [newComment, setNewComment] = useState("");
  const currentUser = "John Doe"; // Replace with actual current user or get dynamically

  const handleAddComment = () => {
    axios
      .post(`http://localhost:8000/post/${post.id}/comment`, {
        body: newComment,
        author: currentUser,
      })
      .then((response) => {
        console.log("Comment added successfully:", response.data);
        setNewComment(""); // Clear comment input
      })
      .catch((error) => {
        console.error("Error adding comment:", error);
      });
  };

  const renderHTML = (htmlContent) => {
    return { __html: htmlContent };
  };

  return (
    <section className="section-newpost">
      <div className="section-user">
        <img
          className="section-img"
          src="https://randomuser.me/api/portraits/women/63.jpg"
          alt="user"
        />
        <p className="section-text">¿Qué vas a compartir hoy?</p>
      </div>

      <button className="section-input" type="button">
        Escribe aquí...
      </button>

      <div className="section-docs">
        <a className="section-add" href="#">
          <i className="fa-solid fa-image"></i> Imagen
        </a>
        <a className="section-add" href="#">
          <i className="fa-solid fa-video"></i> Video
        </a>
        <a className="section-add" href="#">
          <i className="fa-solid fa-microphone"></i> Audio
        </a>
        <a className="section-add" href="#">
          <i className="fa-solid fa-music"></i> Música
        </a>
        <a className="section-add" href="#">
          <i className="fa-solid fa-file-lines"></i> Texto
        </a>
      </div>
    </section>
  );
};

export default Post;
