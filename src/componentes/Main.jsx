export default function Main() {
  return (
    <>
      <main>
        <section className="contenedor " id="quiensoy">
          <br />
          <div className="fons-subtitul wi">
            <h2 className="subtitulo">WEB DEVELOPER</h2>
          </div>
          <br />
          <br />
          <div className="contenedor-servicio1 ">
            <h2 className="subtitulo2">Qui soc</h2>
            <img src="perfil.png" alt="" className="logo2" />
            <br />
            <div className="qui-soc">
              <h3>Personal:</h3>
              <p>
                Em dic Martí Corbalan, soc de Mataró i actualment tinc 20 anys.{" "}
              </p>
              <h3>Estudis:</h3>
              <p>Cicle mitjà de Xarxes microinformatiques</p>
              <p>
                Grau Superior de desenvolupament d'aplicacions multiplataforma
              </p>
              <h3>Habilitats:</h3>
              <p>
                Desenvolupador front-end i aprenent en UI/UX, tinc experiència
                en WordPress
              </p>
              <h3>Idiomes:</h3>
              <p>Català - natiu</p>
              <p>Castellà - natiu</p>
              <p>Anglès - mitj</p>
              <a href="CVMartiCorbalan.pdf" download="">
                <button className="btn btn-primary">Descarregar CV</button>
              </a>
            </div>
          </div>
          <div className="contenedor-servicio ">
            <img src="webdeveloper.svg" alt="" className="imgdev" />
            <img src="Gaming.svg" alt="" className="imgdev1" />
            <img src="music2.png" alt="" className="imgdev2" />
            <div className="quiensoy-servicio">
              <div className="service">
                <h2 className="subtitulo1">Que m'agrada?</h2>
                <br />
                <br />
                <h3 className="n-quiensoy">
                  <span>
                    <span className="number">1</span>Disseny Web
                  </span>
                </h3>
                <p>
                  M'agrada dissenyar pàgines web, sobretot els llenguatges HTML,
                  CSS i JS <br /> Encara estic aprenent a dissenyar
                  pofessional-ment{" "}
                </p>
              </div>
              <div className="service">
                <h3 className="n-quiensoy">
                  <span>
                    <span className="number">2</span>Video Jocs
                  </span>
                </h3>
                <p>
                  Els videojocs que més m'agraden són els shooters, el League of
                  Legends i els jocs com Little Nightmares o It Takes Two
                </p>
              </div>
              <div className="service">
                <h3 className="n-quiensoy">
                  <span>
                    <span className="number">3</span>Música
                  </span>
                </h3>
                <p>
                  M'agrada quasi qualsevol tipus de música, però la que més
                  m'agrada és el rap i el trap
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <hr />
    </>
  );
}
