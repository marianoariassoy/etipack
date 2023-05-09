import Layout from "../../components/Layout";
import Clients from "../../components/Clients";
import Image from "../../components/Image";
import Contact from "../../components/Contact";

const MultipaginasContainer = () => {
  return (
    <Layout>
      <section className="mt-28 relative">
        <div className="hero bg-top bg-cover" id="hero-multipagina">
          <div className="bg-black bg-opacity-0">
            <div className="hero-container container m-auto p-6 text-white pt-20">
              <div className="w-full lg:w-3/5">
                <h1 className="text-5xl font-semibold">Etiquetas autoadhesivas multipágina</h1>
                <p className="mb-4 text-2xl">Si tenés un espacio limitado y mucho que decir, encontraremos la respuesta más práctica y única para tu producto.</p>
                <a href="#contacto" className="inline-block bg-white text-primary btn-nav-contact px-8 py-2 rounded-lg scroll hover:shadow-lg font-semibold">
                  Contactanos
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container m-auto px-6 py-12">
          <div className="row lg:flex lg:mb-20">
            <div className="lg:w-1/2">
              <img src="./assets/images/img-3.png" alt="Imagen de una chica" className="absolute img-hero" />
            </div>
            <div className="lg:w-1/2 pt-32 lg:pt-0">
              <h1 className="text-5xl font-semibold text-primary mb-8">Contá más. Multiplicá tu espacio.</h1>
            </div>
          </div>

          <Clients />
        </div>
      </section>

      <Image />
      <Contact />
    </Layout>
  );
};

export default MultipaginasContainer;
