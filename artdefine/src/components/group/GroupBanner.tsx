import { useState } from "react";
import { ReactComponent as ArrowIcon } from "../../assets/vectors/arrow-down-yellow.svg";
import { ReactComponent as DotsIcon } from "../../assets/vectors/dots-yellow.svg";
import Dropdown from "../dropdown";
import { DropdownButtonModel } from "../../model/DropdownButtonsModel";
import { useLocation, useNavigate } from "react-router-dom";

const GroupBanner: React.FC<{
  name: string;
  bannerUrl: string;
  alt: string;
}> = ({ name, bannerUrl: src, alt }) => {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const navigate = useNavigate();
  const group_id: string = useLocation().pathname.split("/")[2];
  
  const buttons: DropdownButtonModel[] = [
    {
        divider:false,
        class: "link",
        text: "Copy link",
        icon: "link",
        function: () => {console.log("Not implemented yet")}
    },
    {
      divider:false,
      class: "navigate",
      text: "Group details",
      icon: "pending",
      function: () => {navigate("/group/"+group_id+"/details")}
    },
    {
      divider:false,
      class: "navigate",
      text: "Settings",
      icon: "settings",
      function: () => {navigate("/group/"+group_id+"/settings")}
    },
    {
        divider: true,
    },
    {
        divider:false,
        class: "warning",
        text: "Leave group",
        icon: "close",
        function: () => {console.log("Not implemented yet")}
    }
]

  const handleDotsClick = (): void => {
    document.body.classList.add("no-scroll");
    setOpenDropdown(true);
  };

  return (
    <div className="group-banner">
      <div className=" banner">
        <img src={src} alt={alt} />
        <div className="collapse">
          <ArrowIcon />
        </div>
      </div>
      <div className="name-container">
        <div className="group-name">{name} </div>
        <div className="dots" onClick={handleDotsClick}>
          <DotsIcon />
        </div>
      </div>
      {openDropdown && <Dropdown openDropdown={setOpenDropdown} buttonModels={buttons} />}
    </div>
    
  );
};

export default GroupBanner;
