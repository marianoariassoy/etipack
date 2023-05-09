import { useEffect } from "react";
import Layout from "../../components/Layout";
import Clients from "../../components/Clients";
import Image from "../../components/Image";
import Contact from "../../components/Contact";
import Slider from "../../components/Slider";
import { Helmet } from "react-helmet";

const MultipaginasContainer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Helmet>
        <title>Etiquetas autoadhesivas multipágina</title>
        <meta name="description" content="Si tenés un espacio limitado y mucho que decir, encontraremos la respuesta más práctica y única para tu producto." />
        <meta property="og:title" content="Etiquetas autoadhesivas multipágina" />
        <meta property="og:description" content="Si tenés un espacio limitado y mucho que decir, encontraremos la respuesta más práctica y única para tu producto." />
        <meta property="og:url" content="" />
        <meta property="og:image" content="https://imltenis.com.ar/assets/iml.jpg" />
        <meta property="og:image:alt" content="Etipack" />
        <link rel="canonical" href="" />
      </Helmet>
      <section className="mt-28 relative">
        <div className="hero bg-top bg-cover" id="hero-multipagina">
          <div className="bg-black bg-opacity-0">
            <div className="hero-container container m-auto p-6 text-white pt-20">
              <div className="w-full lg:w-3/5">
                <h1 className="text-5xl font-semibold">Etiquetas autoadhesivas multipágina</h1>
                <p className="mb-4 text-2xl">Si tenés un espacio limitado y mucho que decir, encontraremos la respuesta más práctica y única para tu producto.</p>
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
              <img src="./assets/images/img-3.png" alt="Imagen de una chica" className="absolute img-hero" />
            </div>
            <div className="lg:w-1/2 pt-32 lg:pt-0">
              <h1 className="text-5xl font-semibold text-primary mb-8">Contá más. Multiplicá tu espacio.</h1>
            </div>
          </div>

          <Clients />
        </div>
      </section>
      <section>
        <div className="container m-auto p-6 lg:flex justify-between items-start">
          <div className="lg:w-3/5">
            <h1 className="text-4xl font-semibold mb-6">Etiquetas autoadhesivas multipágina</h1>
            <p className="text-xl mb-6">
              La información importante ha de ser accesible y fácil de entender incluso cuando el espacio es limitado. Con las etiquetas multipágina es posible compartir información con su cliente, de la manera que usted desee, con las mínimas
              restricciones y la máxima claridad
            </p>
            <a href="#contact" className="inline-block bg-primary text-white btn-nav-contact px-8 py-2 rounded-lg scroll hover:shadow-lg font-semibold">
              Conocé más
            </a>
          </div>
          <div className="hidden lg:inline">
            <img src="./assets/images/medicine1.png" className="vino" />
          </div>
        </div>
      </section>
      <Slider />
      <section>
        <div className="container m-auto p-6 pb-20">
          <p>
            Si tenés un espacio limitado y mucho que decir, este es el tipo etiquetas que necesitás. Se trata de una etiqueta con un folleto de una o más páginas adicionado sobre ella. Con ellas conseguimos añadir más información. Ideal para
            productos que deben informar el cumplimiento de muchas normas y restricciones que no caben en una etiqueta normal.
          </p>
        </div>
      </section>
      <Image />
      <Contact />
    </Layout>
  );
};

export default MultipaginasContainer;
