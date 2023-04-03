import React from "react";

const Contact = () => {
  return (
    <section id="contacto">
      <div className="container px-6 py-16">
        <h1 className="text-3xl mb-1">CONTACTO</h1>
        <h2 className="text-2xl mb-10 text-primary">Nos encantaría saber de vos</h2>

        <form className="w-full">
          <div className="flex flex-wrap -mx-3 mb-3">
            <div className="w-full md:w-1/2 px-3 mb-3">
              <label className="block  tracking-wide text-gray-700 font-bold mb-2" for="interes">
                ¿Sobre qué estás interesada/o?
              </label>
              <div className="relative">
                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="interes">
                  <option>Inversión</option>
                  <option>Consultoría</option>
                  <option>Prensa</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block tracking-wide text-gray-700 font-bold mb-2" for="email">
                E-Mail
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="text"
                placeholder="hola@email.com"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-3">
            <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
              <label className="block tracking-wide text-gray-700 font-bold mb-2" for="name">
                Nombre
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="name" type="text" placeholder="Juan" />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block tracking-wide text-gray-700 font-bold mb-2" for="apellido">
                Apellido
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="apellido" type="text" placeholder="Gonzales" />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-3">
            <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
              <label className="block tracking-wide text-gray-700 font-bold mb-2" for="cantidad">
                Cantidad de etiquetas a presupuestar
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="cantidad" type="text" placeholder="10" />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
              <label className="block tracking-wide text-gray-700 text-xs font-bold mb-4" for="file">
                Si tiene la imagen de la etiqueta por favor adjúntela aquí (Sólo imágenes PDF en alta)
              </label>
              <label className="block">
                <input
                  id="file"
                  type="file"
                  className="block w-full text-sm text-gray-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm 
      file:bg-gray-500 file:text-white
      hover:file:bg-gray-300"
                />
              </label>
            </div>
          </div>

          <div className=" mb-6">
            <div className="w-full mb-6 ">
              <label className="block tracking-wide text-gray-700 font-bold mb-2" for="comentarios">
                Comentarios
              </label>
              <textarea
                name="comentarios"
                id="comentarios"
                cols="30"
                rows="5"
                className="appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="Comentario"
              ></textarea>
            </div>
          </div>

          <button type="submit" className="bg-primary text-white btn-black-hover px-10 py-4 rounded-full">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
