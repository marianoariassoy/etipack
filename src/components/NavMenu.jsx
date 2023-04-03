const NavMenu = () => {
  const OpenMenu = () => {
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
