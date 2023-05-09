import React from "react";

const Contact = () => {
  return (
    <section className="p-6 py-12" id="contact">
      <div className="container m-auto p-6 border border-gray-200 rounded-lg">
        <h1 className="mb-6 text-3xl font-semibold">Nos encantaría saber de vos</h1>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="mb-1 text-gray-500 block" for="name">
              Nombre
            </label>
            <input type="text" name="name" placeholder="Nombre" className="w-full h-11 p-3 rounded-md border border-gray-200" id="name" />
          </div>
          <div>
            <label className="mb-1 text-gray-500 block" for="lastname">
              Apellido
            </label>
            <input type="text" name="lastname" placeholder="Apellido" className="w-full h-11 p-3 rounded-md border border-gray-200" id="lastname" />
          </div>
          <div>
            <label className="mb-1 text-gray-500 block" for="email">
              Email
            </label>
            <input type="text" name="email" placeholder="Email" className="w-full h-11 p-3 rounded-md border border-gray-200" id="name" />
          </div>
          <div>
            <label className="mb-1 text-gray-500 block" for="phone">
              Phone
            </label>
            <input type="text" name="phone" placeholder="Phone" className="w-full h-11 p-3 rounded-md border border-gray-200" id="phone " />
          </div>
          <div>
            <label className="mb-1 text-gray-500 block" for="interest">
              Sobre qué estás interesada/o?
            </label>
            <select className="w-full h-11 p-3 rounded-md border border-gray-200 bg-transparent text-gray-500" id="interest">
              <option>Seleccionar</option>
              <option>Inversión</option>
              <option>Consultoría</option>
              <option>Prensa</option>
            </select>
          </div>
          <div>
            <label className="mb-1 text-gray-500 block" for="amount">
              Cantidad de etiquetas a presupuestar
            </label>
            <input type="number" name="amount" placeholder="10" className="w-full h-11 p-3 rounded-md border border-gray-200" id="amount" />
          </div>
        </div>
        <div className="mb-4">
          <label className="mb-1 text-gray-500 block" for="message">
            Comentarios
          </label>
          <textarea className="w-full p-3 rounded-md border border-gray-200" name="message" id="message" cols="30" rows="4"></textarea>
        </div>
        <div className="mb-4">
          <label className="mb-1 text-gray-500 block" for="file">
            Adjuntar archivo
          </label>
          <input type="file" name="file" className="w-full  p-3 rounded-md border border-gray-200" id="file" />
        </div>
        <div>
          <button className="bg-primary text-white px-8 py-2 rounded-lg hover:shadow-lg">Enviar</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
