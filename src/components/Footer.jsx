const Footer = () => {
  return (
    <section className="bg-black text-white pb-12 pt-24" id="footer">
      <div className="container px-6 flex flex-wrap">
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
              <a href="#" className="text-gray-400 hover:text-gray-600">
                Etiquetas Autoadhesivas
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-gray-600">
                Etiquetas multipágina
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-gray-600">
                Sobre Nosotros
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-gray-600">
                Contáctanos
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/3 flex items-start md:items-end flex-wrap flex-col mb-6">
          <a href="#contacto" className="btn bg-secondary btn-primary-hover px-10 py-4 rounded-full mb-6 scroll">
            contáctanos
          </a>
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
      <div className="text-center text-sm">Copyright © - Etipack</div>
    </section>
  );
};

export default Footer;
