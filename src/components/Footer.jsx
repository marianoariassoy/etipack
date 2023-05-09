import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-black text-white pb-12 pt-24" id="footer">
      <div className="container m-auto px-6 flex flex-wrap">
        <div className="w-full md:w-1/3">
          <ul className="nav-footer">
            <li className="mb-2">
              <a href="#" className="text-white hover:text-gray-400">
                Vinos
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-white hover:text-gray-400">
                Agroquímicos
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-white hover:text-gray-400">
                Alimentos
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-white hover:text-gray-400">
                Cosméticos
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-white hover:text-gray-400">
                Cosméticos
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-white hover:text-gray-400">
                Productos medicinales
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-white hover:text-gray-400">
                Baterías
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/3 mb-6">
          <ul className="nav-footer">
            <li className="mb-2">
              <Link to="/" className="text-gray-400 hover:text-gray-600">
                Sobre Nosotros
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/etiquetas-autoadhesivas" className="text-gray-400 hover:text-gray-600">
                Etiquetas autoadhesivas
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/etiquetas-multipagina" className="text-gray-400 hover:text-gray-600">
                Etiquetas multipágina
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/3 flex items-start md:items-end flex-wrap flex-col mb-6">
          <Link to="/contacto" className="inline btn-nav-2 text-white bg-secondary px-8 py-2 rounded-lg mb-6 scroll">
            Contactanos
          </Link>
          <img src="./assets/logo-white.svg" alt="Etipack Logo" className="mb-6" />

          <div className="flex items-center">
            <a href="#" target="_blank" className="ml-2 hover:bg-gray-600 p-2 rounded-full w-8 h-8">
              <img src="./assets/envelope-solid.svg" />
            </a>
            <a href="#" target="_blank" className="ml-2 hover:bg-gray-600 p-2 rounded-full w-8 h-8">
              <img src="./assets/instagram.svg" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-sm">Copyright &copy; - Etipack</div>
    </section>
  );
};

export default Footer;
