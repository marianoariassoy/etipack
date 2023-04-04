//Components
import NavMenu from "./NavMenu";
import React from "react";

const NavBar = () => {
  return (
    <div className="container flex justify-between items-center p-6">
      <NavMenu />

      <div>
        <a href="#home" className="logo scroll">
          <img src="./assets/logo.svg" width="300" alt="Etipack Logo" />
        </a>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#etiquetas" className="btn-primary-hover px-4 py-3 rounded-full">
              Etiquetas Autoadhesivas
            </a>
          </li>
          <li>
            <a href="#multipagina" className="btn-primary-hover px-4 py-3 rounded-full">
              Etiquetas multipágina
            </a>
          </li>
          <li>
            <a href="#nosotros" className="btn-primary-hover px-4 py-3 rounded-full">
              Sobre Nosotros
            </a>
          </li>
          <li>
            <a href="#contacto" className="btn-black-hover bg-secondary text-black px-4 py-3 rounded-full">
              Contactanos
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
