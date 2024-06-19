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
    <section className="section">
      {/* New post */}

      <section className="section-vert">
        <section className="section-post">
          <div className="section-user">
            <div className="section-userdata">
              <img
                className="section-img"
                src="https://randomuser.me/api/portraits/men/62.jpg"
                alt="user"
              />
              <p className="section-text">@felipecrack</p>
            </div>
            <div className="section-star">
              <i className="fa-solid fa-star star-color"></i>
              <p className="section-text">11h</p>
            </div>
          </div>

          <div className="post-img">
            <img className="post-img" src="autismo.jpg" alt="Imagen1" />
            <p className="post-imgdesc">Lazo concientización autismo</p>
          </div>

          <div className="section-coment">
            <p className="section-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              totam numquam dolorum nulla. Dolorum soluta reprehenderit vero
              officiis suscipit voluptatem ex sequi distinctio itaque rem!
            </p>
          </div>

          <div className="section-reacciones">
            <input className="section-inpu" type="text" />
            <div>
              <i className="fa-solid fa-bookmark"></i>
              <i className="fa-solid fa-paper-plane"></i>
            </div>
          </div>
        </section>
      </section>

      <section className="section-vert">
        <section className="section-post">
          <div className="section-user">
            <div className="section-userdata">
              <img
                className="section-img"
                src="https://randomuser.me/api/portraits/men/43.jpg"
                alt="user"
              />
              <p className="section-text">@tonyelprofe</p>
            </div>
            <div className="section-star">
              <i className="fa-solid fa-star"></i>
              <p className="section-text">8h</p>
            </div>
          </div>

          <div className="section-coment">
            <p className="section-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              totam numquam dolorum nulla. Dolorum soluta reprehenderit vero
              officiis suscipit voluptatem ex sequi distinctio itaque rem!
            </p>
          </div>

          <div className="section-reacciones">
            <input className="section-inpu" type="text" />
            <div>
              <i className="fa-solid fa-bookmark"></i>
              <i className="fa-solid fa-paper-plane"></i>
            </div>
          </div>
        </section>

        <section className="section-post">
          <div className="section-user">
            <div className="section-userdata">
              <img
                className="section-img"
                src="WhatsApp Image 2024-06-18 at 23.48.47.jpeg"
                alt="user"
              />
              <p className="section-text">@SoyYeshua</p>
            </div>
            <div className="section-star">
              <i className="fa-solid fa-star"></i>
              <p className="section-text">12h</p>
            </div>
          </div>

          <div className="section-audio">
            <i className="fa-solid fa-backward"></i>
            <i className="fa-solid fa-play"></i>
            <i className="fa-solid fa-forward"></i>

            <div className="section-dio">
              <div className="section-minus">
                <i className="fa-solid fa-minus"></i>
                <i className="fa-solid fa-minus"></i>
                <i className="fa-solid fa-minus"></i>
                <i className="fa-solid fa-minus"></i>
                <i className="fa-solid fa-minus"></i>
                <i className="fa-solid fa-minus"></i>
                <i className="fa-solid fa-minus"></i>
              </div>

              <div className="section-minus">
                <i className="fa-solid fa-minus fa-minus-color"></i>
                <i className="fa-solid fa-minus fa-minus-color"></i>
                <i className="fa-solid fa-minus fa-minus-color"></i>
                <i className="fa-solid fa-minus fa-minus-color"></i>
                <i className="fa-solid fa-minus fa-minus-color"></i>
                <i className="fa-solid fa-minus fa-minus-color"></i>
                <i className="fa-solid fa-minus fa-minus-color"></i>
                <i className="fa-solid fa-minus fa-minus-color"></i>
                <i className="fa-solid fa-minus fa-minus-color"></i>
                <i className="fa-solid fa-minus fa-minus-color"></i>
                <i className="fa-solid fa-minus fa-minus-color"></i>
                <i className="fa-solid fa-minus fa-minus-color"></i>
                <i className="fa-solid fa-minus fa-minus-color"></i>
                <i className="fa-solid fa-minus fa-minus-color"></i>
                <i className="fa-solid fa-minus fa-minus-color"></i>
              </div>
            </div>
          </div>

          <div className="section-coment">
            <p className="section-text">
              Uno de mis audios para aumentar la concentración favoritos!!!!
            </p>
          </div>

          <div className="section-reacciones">
            <input className="section-inpu" type="text" />
            <div>
              <i className="fa-solid fa-bookmark"></i>
              <i className="fa-solid fa-paper-plane"></i>
            </div>
          </div>
        </section>
      </section>

      <section className="section-vert">
        <section className="section-post">
          <div className="section-user">
            <div className="section-userdata">
              <img
                className="section-img"
                src="WhatsApp Image 2024-06-18 at 23.48.47.jpeg"
                alt="user"
              />
              <p className="section-text">@SoyYeshua</p>
            </div>
            <div className="section-star">
              <i className="fa-solid fa-star star-color"></i>
              <p className="section-text">9h</p>
            </div>
          </div>

          <div className="post-img">
            <img className="post-img" src="docs.jpg" alt="Imagen1" />
            <p className="post-imgdesc">Lazo concientización autismo</p>
          </div>

          <div className="section-coment">
            <p className="section-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              totam numquam dolorum nulla. Dolorum soluta reprehenderit vero
              officiis suscipit voluptatem ex sequi distinctio itaque rem!
            </p>
            <button className="section-vermas">Ver más...</button>
          </div>

          <div className="section-reacciones">
            <input className="section-inpu" type="text" />
            <div>
              <i className="fa-solid fa-bookmark"></i>
              <i className="fa-solid fa-paper-plane"></i>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Post;
