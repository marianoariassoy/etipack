//Components
import Btn from "../../components/Btn";

const Multipagina = () => {
  return (
    <section id="multipagina">
      <div className="container px-6 pt-16">
        <h1 className="text-3xl mb-10">ETIQUETAS MULTIPÁGINA</h1>
      </div>

      <div className="banner mb-10" id="banner-about">
        <div className="container p-6 h-full flex items-end">
          <p className="text-white text-2xl mb-6">Si tenés un espacio limitado y mucho que decir, encontraremos la respuesta más práctic y única para tu producto.</p>
        </div>
      </div>

      <div className="container flex flex-wrap px-6 pb-6">
        <div className="w-full md:w-1/2 md:pr-12 mb-12">
          <p className="mb-10 mt-10 text-justify">
            La información importante debe ser accesible y fácil de entender. Con las etiquetas multipágina es posible compartir información con tu cliente, de la manera que desees, con las mínimas restricciones y la máxima claridad. Si tenés un
            espacio limitado y mucho que decir, este es el tipo etiquetas que necesitás. Se trata de una etiqueta con un folleto de una o más páginas adicionado sobre ella. Con ellas conseguimos añadir más información. Ideal para productos que deben
            informar el cumplimiento de muchas normas y restricciones que no caben en una etiqueta normal.
          </p>
          <Btn text="Hablemos" />
        </div>
        <div className="w-full md:w-1/2">
          <img src="https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Multipagina;
