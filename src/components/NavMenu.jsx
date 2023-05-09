import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let menuOpen = false;

const NavMenu = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(ScrollTrigger);

    let linksOthers = gsap.utils.toArray(".scroll");
    linksOthers.forEach((a) => {
      let element = document.querySelector(a.getAttribute("href")),
        linkST = ScrollTrigger.create({
          trigger: element,
          start: "top top",
        });
      ScrollTrigger.create({
        trigger: element,
        start: "top center",
        end: "bottom center",
      });
      a.addEventListener("click", (e) => {
        e.preventDefault();
        gsap.to(window, { duration: 1, scrollTo: linkST.start, overwrite: "auto" });
      });
    });
  }, []);

  const OpenMenu = () => {
    menuOpen ? (menuOpen = false) : (menuOpen = true);
    const menu = document.querySelector("nav");
    const navMenu = document.querySelector("#nav-menu");
    menu.classList.toggle("block");
    navMenu.classList.toggle("active");
  };

  return (
    <div id="nav-menu" onClick={OpenMenu}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default NavMenu;
