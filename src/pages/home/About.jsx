//Components
import Btn from "../../components/Btn";

const About = () => {
  return (
    <section id="multipagina">
      <div className="container px-6 pt-10">
        <h1 className="text-3xl mb-10">SOBRE NOSOTROS</h1>
      </div>

      <div className="banner mb-10" id="banner-multipagina">
        <div className="container p-6 h-full flex items-end">
          <p className="text-white text-2xl mb-6">Somos ETIPACK. Desde el año 1983 ayudando a nuestros clientes a comunicarse de forma más efectiva a través de las artes gráficas.</p>
        </div>
      </div>

      <div className="container flex flex-wrap px-6">
        <div className="w-full md:w-1/2 mb-12">
          <p className="mb-10 md:mt-10 text-justify md:pr-12">
            Un equipo a tu servicio Entendemos que nuestros clientes buscan siempre en cada uno de sus productos comunicar su mejor imagen. Para lograr este objetivo trabajamos coordinadamente con sus áreas de desarrollo, marketing y compras.
            Escuchándolos, comprendiendo sus procesos y necesidades es como mejor podemos brindarles el asesoramiento adecuado. Este vínculo nos permite desarrollar los productos que más se acerquen a las necesidades de tu compañía Iniciemos una
            conversación.
          </p>
          <Btn text="Hablemos" />
        </div>
        <div className="w-full md:w-1/2">
          <img src="https://images.unsplash.com/photo-1542272606-fe889704e0f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default About;
