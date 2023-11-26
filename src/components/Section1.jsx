function Section1() {
  return (
    <section className="" id="section-1">
      <div className="relative" id="">
        <div className="flex flex-col items-center justify-between" id="dots">
          <div className="w-2 h-2 bor"></div>
          <div className="w-2 h-2 bor"></div>
          <div className="w-2 h-2 bor"></div>
          <div className="w-2 h-2 bor"></div>
        </div>

        <div className="flex items-center justify-center" id="bottom-arrow">
          <img className="" src="src/components/img/Vector9.png" />
        </div>

        <div className="flex gap-8 absolute left-[124px] top-[640.49px]">
          <a href="">
            <img className="" src="src/components/img/meta_05B580.png" alt="" />
          </a>
          <a href="">
            <img
              className=""
              src="src/components/img/instagram_05B580.png"
              alt=""
            />
          </a>
          <a href="">
            <img
              className=""
              src="src/components/img/twitter_05B580.png"
              alt=""
            />
          </a>
        </div>
      </div>

      <div className="" id="section-1-div2">
        <div className="mt-6 ml-8">
          <h3 className="mb-5 text-base font-medium flex items-baseline gap-1">
            <img src="src/components/img/Vector10.png" alt="" />
            OUR MISSION
          </h3>
          <h1 className="leading-10">
            We decided to carry the flag for rare <br /> diseases in Saudi
            Arabia
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Section1;
