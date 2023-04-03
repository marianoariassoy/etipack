//Components
import NavMenu from "./NavMenu";

const NavBar = () => {
  return (
    <div className="container flex justify-between items-center p-6">
      <NavMenu />

      <div>
        <a href="#" className="logo">
          <img src="./assets/logo.svg" width="300" alt="Etipack Logo" />
        </a>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#" className="btn-primary-hover px-4 py-3 rounded-full">
              Etiquetas Autoadhesivas
            </a>
          </li>
          <li>
            <a href="#" className="btn-primary-hover px-4 py-3 rounded-full">
              Etiquetas multipágina
            </a>
          </li>
          <li>
            <a href="#" className="btn-primary-hover px-4 py-3 rounded-full">
              Sobre Nosotros
            </a>
          </li>
          <li>
            <a href="#" className="btn-black-hover bg-secondary text-black px-4 py-3 rounded-full">
              Contactanos
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
