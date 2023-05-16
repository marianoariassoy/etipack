import { useEffect } from "react";
import Layout from "../../components/Layout";
import Clients from "../../components/Clients";
import Image from "../../components/Image";
import Contact from "../../components/Contact";
import Slider from "../../components/Slider";
import { Helmet } from "react-helmet";
import Lottie from "lottie-react";
import vino from "./vino.json";

const AutoadhesivasContainer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const style = {
    width: 150,
  };

  const interactivity = {
    mode: "scroll",
    actions: [
      {
        visibility: [0, 0.2],
        type: "stop",
        frames: [0],
      },
      {
        visibility: [0.2, 0.45],
        type: "seek",
        frames: [0, 45],
      },
      {
        visibility: [0.45, 1.0],
        type: "seek",
        frames: [45, 60],
      },
    ],
  };

  return (
    <Layout>
      <Helmet>
        <title>Etiquetas autoadhesivas en bobina</title>
        <meta
          name="description"
          content="Hay determinados sectores en los que la importancia de la etiqueta es mayor, ya que además de ofrecer una información, aporta un diseño y una imagen que es decisiva en un primer momento a la hora de elegir."
        />
        <meta property="og:title" content="Etiquetas autoadhesivas en bobina" />
        <meta
          property="og:description"
          content="Hay determinados sectores en los que la importancia de la etiqueta es mayor, ya que además de ofrecer una información, aporta un diseño y una imagen que es decisiva en un primer momento a la hora de elegir."
        />
        <meta property="og:url" content="" />
        <meta property="og:image" content="https://imltenis.com.ar/assets/iml.jpg" />
        <meta property="og:image:alt" content="Etipack" />
        <link rel="canonical" href="" />
      </Helmet>

      <section className="mt-28 relative">
        <div className="hero bg-top bg-cover" id="hero-autoadhesivas">
          <div className="hero-gradient-secondary">
            <div className="hero-container container m-auto p-6 text-white pt-20">
              <div className="w-full lg:w-3/5">
                <h1 className="text-5xl font-semibold">Etiquetas autoadhesivas en bobina</h1>
                <p className="mb-4 text-2xl">Las etiquetas dicen mucho, comuniquá la historia de tu marca, generá confianza y destacate entre la multitud.</p>
                <a href="#contact" className="inline-block bg-white text-secondary btn-nav-contact px-8 py-2 rounded-lg scroll hover:shadow-lg font-semibold">
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
              <img src="./assets/images/img-2.png" alt="Imagen de una chica" className="absolute img-hero" />
            </div>
            <div className="lg:w-1/2 pt-32 lg:pt-0">
              <h1 className="text-5xl font-semibold text-primary mb-8">Realzá tu imagen y tu producto.</h1>
            </div>
          </div>
          <Clients />
        </div>
      </section>
      <section>
        <div className="container m-auto p-6 lg:flex justify-between items-center">
          <div className="lg:w-4/6">
            <h1 className="text-4xl font-semibold mb-6">Etiquetas autoadhesivas en bobina</h1>
            <p className="text-xl mb-6">Hay determinados sectores en los que la importancia de la etiqueta es mayor, ya que además de ofrecer una información, aporta un diseño y una imagen que es decisiva en un primer momento a la hora de elegir.</p>
            <a href="#contact" className="inline-block bg-primary text-white btn-nav-contact px-8 py-2 rounded-lg scroll hover:shadow-lg font-semibold">
              Conocé más
            </a>
          </div>
          <div className="hidden w-4/12 lg:flex justify-center">
            <Lottie animationData={vino} style={style} interactivity={interactivity} />
          </div>
        </div>
      </section>
      <Slider />
      <Image />
      <Contact />
    </Layout>
  );
};

export default AutoadhesivasContainer;
