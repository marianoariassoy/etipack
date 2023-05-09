import { useEffect } from "react";
import Layout from "../../components/Layout";
import Clients from "../../components/Clients";
import Image from "../../components/Image";
import Contact from "../../components/Contact";

const NosotrosContainer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <section className="mt-28 relative">
        <div className="hero bg-top bg-cover" id="hero-nosotros">
          <div className="hero-gradient-primary">
            <div className="hero-container container m-auto p-6 text-white pt-20">
              <div className="w-full lg:w-3/5">
                <h1 className="text-5xl font-semibold">Dejá que tu empaque hable y eleve tu marca al siguiente nivel.</h1>
                <p className="mb-4 text-2xl">Las etiquetas dicen mucho, comuniquá la historia de tu marca, generá confianza y destacate entre la multitud.</p>
                <a href="#contact" className="inline-block bg-white text-primary btn-nav-contact px-8 py-2 rounded-lg scroll hover:shadow-lg font-semibold">
                  Contactanos
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container m-auto px-6 py-12">
          <div className="row lg:flex lg:mb-28">
            <div className="lg:w-1/2">
              <img src="./assets/images/img-1.png" alt="Imagen de una chica" className="absolute img-hero" />
            </div>
            <div className="lg:w-1/2 pt-32 lg:pt-0 ">
              <h1 className="text-5xl font-semibold text-primary mb-8">40 años de trayectoria nos avalan.</h1>
            </div>
          </div>

          <Clients />

          <div className="row" id="nosotros-txt">
            <div className="lg:w-3/4 lg:py-20">
              <h1 className="text-4xl font-semibold text-secondary mb-4">Somos Etipack. Desde el año 1983 ayudando a nuestros clientes a comunicarse de forma más efectiva a través de las artes gráficas.</h1>
            </div>
          </div>
        </div>
      </section>

      <Image />

      <section>
        <div className="container m-auto p-6 py-12">
          <div className="text-xl">
            <img src="./assets/images/img-2.png" alt="Imagen de un vino y su etiqueta" className="img-txt" />
            Un equipo a tu servicio Entendemos que nuestros clientes buscan siempre en cada uno de sus productos comunicar su mejor imagen. Para lograr este objetivo trabajamos coordinadamente con sus áreas de desarrollo, marketing y compras.
            Escuchándolos, compren- diendo sus procesos y necesidades es como mejor podemos brindarles el asesoramiento adecuado. Este vínculo nos permite desarrollar los productos que más se acerquen a las necesidades de tu compañía Iniciemos una
            conversación.
          </div>
          <a href="#contact" className="inline-block bg-primary text-white btn-nav-contact px-8 py-2 rounded-lg scroll hover:shadow-lg mt-6">
            Contactanos
          </a>
        </div>
      </section>

      <Contact />
    </Layout>
  );
};

export default NosotrosContainer;
