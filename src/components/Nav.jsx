function Nav() {
  return (
    <nav className="flex items-center pl-130">
      <img src="/src/assets/ColdGecko.png" alt="" />
      <ul className="flex items-center justify-center">
        <a href="#" className="nav-items" id="aboutUs">
          About us
        </a>
        <a href="#" className="nav-items">
          Patients Registration
        </a>
        <a href="#" className="nav-items">
          Resources
        </a>
        <a href="#" className="nav-items">
          News
        </a>
        <a href="#" className="nav-items">
          Awarness
        </a>
      </ul>
    </nav>
  );
}

export default Nav;
