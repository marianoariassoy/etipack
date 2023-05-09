import React from "react";

const Image = () => {
  return (
    <section className="bg-terciary">
      <div className="container m-auto p-6 py-10">
        <h1 className="mb-4 text-3xl font-semibold">¿Listo para dar la mejor imagen a tus clientes?</h1>
        <p className="mb-6 text-xl">Ayudamos a empresas de distintas industrias a comunicarse de forma más efectiva con sus clientes a través de etiquetas de alto impacto visual. Iniciemos una conversación.</p>
        <a href="#contact" className="inline-block bg-primary text-white btn-nav-contact px-8 py-2 rounded-lg scroll hover:shadow-lg font-semibold">
          Contactanos
        </a>
      </div>
    </section>
  );
};

export default Image;
