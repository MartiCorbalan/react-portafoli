import React from "react";

export default function Navbar() {
  return (
    <header>
      <nav className="nav" id="navbar">
        <div className="nav_container">
          <h1 className="nav_logo">
            <a href="#">Martí Corbalan</a>
          </h1>
          {/*este label haga referencia con el for al input de abajo, tienen que ir seguidos*/}
          <label
            htmlFor="menu"
            className="nav_label "
            id="hamburguer"
            /* onClick={name()} */
          >
            <img src="menu.svg" className="nav_img" />
          </label>
          {/*una vez das click a este elemento, se activara la pseudoclase checked
    que es cuando el checkbox esta activo*/}
          <input type="checkbox" id="menu" className="nav_input" />
          {/*una vez pase esto, usamos el selector de hermano adyacente en css, 
    este hermano es el menu*/}
          <div className="nav_menu">
            <a href="#quiensoy" className="nav_item">
              Sobre mi
            </a>
            <a href="#skills" className="nav_item">
              Skills
            </a>
            <a href="#qualificacions" className="nav_item">
              Qualificacions
            </a>
            <a href="#exp-laboral" className="nav_item">
              Experiència laboral
            </a>
            <a href="#contacte" className="nav_item">
              Contacte
            </a>
          </div>
        </div>
      </nav>
      <div className="nav_menu2 menu-hidden">
        <a href="#quiensoy" className="nav_item">
          Sobre mi
        </a>
        <a href="#skills" className="nav_item">
          Skills
        </a>
        <a href="#qualificacions" className="nav_item">
          Qualificacions
        </a>
        <a href="#exp-laboral" className="nav_item">
          Experiència laboral
        </a>
        <a href="#contacte" className="nav_item">
          Contacte
        </a>
      </div>
    </header>
  );

  /* function name() {
    document.querySelector('#hamburguer').onclick = function(){
    document.querySelector('.nav_menu2').classList.toggle('menu-hidden');
    
  }
} */
}
