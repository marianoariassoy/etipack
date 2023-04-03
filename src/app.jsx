//Components
import React from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/home/Home";
import Footer from "./components/Footer";

export function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Home />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
