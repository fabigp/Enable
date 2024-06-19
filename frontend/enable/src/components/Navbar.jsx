import React from "react";

export function Navbar(props) {
  return (
    <>
      <section className="barra">
        <div className="barra-perfil">
          <a href="perfil.html">
            <img
              className="barra-im"
              src="https://randomuser.me/api/portraits/women/63.jpg"
              alt="foto-perfil"
            />
          </a>
          <div className="barra-info">
            <a href="perfil.html">¡Hola Fabi!</a>
            <p className="barra-h3">Autismo</p>
          </div>
        </div>

        <div className="barra-colaboradores">
          <h2 className="barra-h2">Posts relevantes</h2>
          <div className="barra-top">
            <img
              className="barra-post"
              src="autismo.jpg"
              alt="post sobre autismo"
            />
            <img
              className="barra-post"
              src="docs.jpg"
              alt="post sobre documentos"
            />
            <img
              className="barra-post"
              src="casadelsol.jpg"
              alt="post sobre Casa del Sol"
            />
          </div>
        </div>

        <div className="barra-colaboradores">
          <h2 className="barra-h2">Top Colaboradores</h2>
          <div className="barra-top">
            <img
              className="barra-img"
              src="https://randomuser.me/api/portraits/men/62.jpg"
              alt="foto de colaborador 1"
            />
            <img
              className="barra-img"
              src="https://randomuser.me/api/portraits/women/63.jpg"
              alt="foto de colaborador 2"
            />
            <img
              className="barra-img"
              src="https://randomuser.me/api/portraits/men/53.jpg"
              alt="foto de colaborador 3"
            />
          </div>
        </div>

        <div className="barra-colaboradores">
          <h2 className="barra-h2">Top Asociaciones</h2>
          <div className="barra-top">
            <img className="barra-img" src="images.jpg" alt="fundacion 1" />
            <img className="barra-img" src="casadelsol.jpg" alt="fundacion 2" />
            <img
              className="barra-img"
              src="android-chrome-512x512.png"
              alt="fundacion 3"
            />
          </div>
        </div>

        <i className="fa-solid fa-bars"></i>
      </section>
    </>
  );
}

export default Navbar;
