/* eslint-disable react/jsx-no-duplicate-props */
function Footer() {
  return (
    <footer className="relative">
      <div className="flex text-white absolute w-[1204px] left-[116px] top-[50px]">
        <div className="footer-links flex flex-col">
          <h3>SAUDI ARABIA OFFICE</h3>
          <a>XYZ</a>
        </div>

        <div className="footer-links flex flex-col absolute left-[351px] w-28">
          <h3>WHAT WE DO</h3>
          <a href="#">Issues</a>
          <a href="#">Initiatives</a>
          <a href="#">Communities</a>
        </div>

        <div className="footer-links flex flex-col absolute left-[582px] w-[119px]">
          <h3>WHY WE DO IT</h3>
          <a href="#">Overview</a>
        </div>

        <div className="footer-links flex flex-col w-44 absolute left-[820px]">
          <h3>WHO WE ARE</h3>
          <a href="#">Our Approach</a>
          <a href="#">Our Financials</a>
          <a href="#">Our Mission & History</a>
          <a href="#">Our Partners</a>
        </div>

        <div className="footer-links flex flex-col w-[117px] absolute left-[1087px]">
          <h3>GET INVOLVED</h3>
          <a href="#">Give</a>
          <a href="#">Learn</a>
          <a href="#">ACT</a>
        </div>

        <div
          className="absolute w-[1204px] top-[243px] flex items-center justify-between"
          id=""
        >
          <img src="src/components/img/ColdGecko.png" alt="" />
          <div className="flex items-center">
            <a className="m-7" href="">
              Privacy Policy
            </a>
            <a className="m-7" href="">
              Contact Us
            </a>
            <img className="m-4" src="src/components/img/Vector17.png" alt="" />
            <img
              className="m-4 w-6 h-6"
              src="src/components/img/meta.png"
              alt=""
            />
            <img
              className="m-4 w-6 h-6"
              src="src/components/img/instagram.png"
              alt=""
            />
            <img
              className="m-4 w-6 h-6"
              src="src/components/img/linkdien.png"
              alt=""
            />
            <img
              className="m-4 w-6 h-6"
              src="src/components/img/twitter.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
