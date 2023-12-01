import { Component } from "react";

export default class Dropdown_Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: "hidden",
    };
  }

  render() {
    return (
      <div
        className="px-[22px] py-[18px] w-[245px] h-[270px] shrink-0 border border-neutral-50 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)] rounded-[5px] border-solid absolute left-[377px] top-[90px] z-10 bg-[#FAFAFA] hidden"
        onClick={this.changeDisplay}
      >
        <div className="h-[228px] w-[201px] flex flex-col justify-center gap-[14px]">
          <a
            className="round-[5px] text-[19.5px] font-medium h-[44px] hover:bg-[#E4F2EE] rounded-[5px] pl-[12px] py-[4px]"
            href=""
          >
            Who we are
          </a>

          <a
            className="round-[5px] text-[19.5px] font-medium h-[44px] hover:bg-[#E4F2EE] rounded-[5px] pl-[12px] py-[4px]"
            href=""
          >
            Wolfram Syndrome
          </a>

          <a
            className="round-[5px] text-[19.5px] font-medium h-[44px] hover:bg-[#E4F2EE] rounded-[5px] pl-[12px] py-[4px]"
            href=""
          >
            Annual Resports
          </a>

          <a
            className="round-[5px] text-[19.5px] font-medium h-[44px] hover:bg-[#E4F2EE] rounded-[5px] pl-[12px] py-[4px]"
            href=""
          >
            Our Policies
          </a>

          <a
            className="round-[5px] text-[19.5px] font-medium h-[44px] hover:bg-[#E4F2EE] rounded-[5px] pl-[12px] py-[4px]"
            href=""
          >
            WS Overview
          </a>
        </div>
      </div>
    );
  }
}
