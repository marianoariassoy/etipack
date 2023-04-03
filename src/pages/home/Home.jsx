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
        <Title>Etipack</Title>
        <Link rel="canonical" href="" />
        <Meta name="title" content="Etipack" />
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
