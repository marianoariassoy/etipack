//Dependencies
import { HeadProvider, Title, Link, Meta } from "react-head";

//Components
import Slider from "./Slider";
import Clients from "./Clients";
import Etiquetas from "./Etiquetas";
import Multipagina from "./Multipagina";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <HeadProvider>
        <Title>Etipack &bull; Valoriza tu marca &bull; Etiquetas Autoadhesivas</Title>
        {/* <Link rel="canonical" href="" /> */}
        <Meta name="title" content="Etipack &bull; Valoriza tu marca &bull; Etiquetas Autoadhesivas" />
      </HeadProvider>
      <Slider />
      <Clients />
      <Etiquetas />
      <Multipagina />
      <About />
      <Contact />
    </>
  );
};

export default Home;
