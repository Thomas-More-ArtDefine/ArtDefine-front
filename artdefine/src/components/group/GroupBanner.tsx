import { useState } from "react";
import { ReactComponent as ArrowIcon } from "../../assets/vectors/arrow-down-yellow.svg";
import { ReactComponent as DotsIcon } from "../../assets/vectors/dots-yellow.svg";
import Dropdown from "../general/Dropdown";
import { DropdownButtonModel } from "../../model/DropdownButtonsModel";
import { useNavigate, useParams } from "react-router-dom";

const GroupBanner: React.FC<{
  name: string;
  bannerUrl: string;
  alt: string;
  handleStepChange?: React.Dispatch<React.SetStateAction<string>>;
}> = ({ name, bannerUrl: src, alt, handleStepChange:setCurrentStep }) => {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  
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
      function: () => {setCurrentStep? setCurrentStep('Details') : navigate("/group/"+id, {state: {state: "Details"}});}
    },
    {
      divider:false,
      class: "navigate",
      text: "Settings",
      icon: "settings",
      function: () => {navigate("/group/"+id+"/settings"); document.body.classList.remove("no-scroll");}
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
