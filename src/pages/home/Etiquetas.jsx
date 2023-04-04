//Components
import Btn from "../../components/Btn";

const Etiquetas = () => {
  return (
    <>
      <section id="etiquetas">
        <div className="container px-6 py-10">
          <h1 className="text-2xl mb-10 text-center">ETIQUETAS AUTOADHESIVAS EN BOBINA</h1>
          <div className="row flex flex-wrap mb-16">
            <div className="w-full md:w-1/2">
              <img src="./assets/img1.jpg" className="w-full" />
            </div>
            <div className="w-full md:w-1/2 md:pl-12">
              <p className="mb-10 mt-6 md:mt-10 text-justify">
                Hay determinados sectores en los que la importancia de la etiqueta es mayor, ya que además de ofrecer una información, aporta un diseño y una imagen que es decisiva en un primer momento a la hora de elegir.
              </p>
              <Btn text="Conocé más" />
            </div>
          </div>
          <h1 className="text-2xl mb-10 text-center">ETIQUETAS MULTIPÁGINA</h1>
          <div className="row flex-wrap flex">
            <div className="w-full md:w-1/2 text-right md:pr-12 mb-12">
              <p className="mb-10 md:mt-10 text-justify">
                La información importante ha de ser accesible y fácil de entender incluso cuando el espacio es limitado. Con las etiquetas multipágina es posible compartir información con su cliente, de la manera que usted desee, con las mínimas
                restricciones y la máxima claridad
              </p>
              <Btn text="Conocé más" />
            </div>
            <div className="w-full md:w-1/2">
              <img src="https://images.unsplash.com/photo-1580481072645-022f9a6dbf27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="w-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-terciary" id="mejor-imagen">
        <div className="container px-6 py-24">
          <h1 className="text-3xl mb-6">¿Listo para dar la mejor imagen a tus clientes?</h1>
          <p className="mb-10 text-justify md:w-1/2">Ayudamos a empresas de distintas industrias a comunicarse de forma más efectiva con sus clientes a través de etiquetas de alto impacto visual. Iniciemos una conversación.</p>

          <a href="#contacto" className="btn bg-primary text-white btn-black-hover px-10 py-4 rounded-full scroll">
            Hablemos
          </a>
        </div>
      </section>
    </>
  );
};

export default Etiquetas;
