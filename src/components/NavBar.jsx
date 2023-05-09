import { Link, NavLink } from "react-router-dom";
import NavMenu from "./NavMenu";

const NavBar = () => {
  return (
    <div className="container m-auto flex justify-between items-center p-6">
      <Link to="/" className="logo">
        <img src="./assets/images/logo.png" alt="Etipack Logo" />
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink to="/" className="btn-nav font-semibold">
              Sobre nosotros
            </NavLink>
          </li>
          <li>
            <NavLink to="/etiquetas-autoadhesivas" className="btn-nav font-semibold">
              Etiquetas autoadhesivas
            </NavLink>
          </li>
          <li>
            <NavLink to="/etiquetas-multipagina" className="btn-nav font-semibold">
              Etiquetas multipágina
            </NavLink>
          </li>
        </ul>
      </nav>
      <a href="#contact" className="btn-nav-contact bg-primary text-white px-8 py-2 rounded-lg hidden lg:inline scroll">
        Contactanos
      </a>

      <NavMenu />
    </div>
  );
};

export default NavBar;
