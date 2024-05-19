import { useState } from "react";
import { ReactComponent as ArrowIcon } from "../../assets/vectors/arrow-down-yellow.svg";
import { ReactComponent as DotsIcon } from "../../assets/vectors/dots-yellow.svg";
import { DropdownButtonModel } from "../../model/DropdownButtonsModel";
import { useNavigate } from "react-router-dom";
import Dropdown from "../general/Dropdown";

interface BannerProps {
  imageUrl: string;
  imageAlt: string;
}



const Banner: React.FC<{
  imageUrl: string;
  imageAlt: string;
  handleStepChange?: React.Dispatch<React.SetStateAction<string>>;
  myProfile?: boolean;
}> = ({ 
  imageUrl: src, 
  imageAlt: alt,
  handleStepChange:setCurrentStep,
  myProfile
}) => {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const navigate = useNavigate();

  const myProfileButtons: DropdownButtonModel[] = [
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
      text: "Settings",
      icon: "settings",
      function: () => {navigate("/profile/editBanner"); document.body.classList.remove("no-scroll");}
    },
  ]

  const profileButtons: DropdownButtonModel[] = [
    {
        divider:false,
        class: "link",
        text: "Copy link",
        icon: "link",
        function: () => {console.log("Not implemented yet")}
    },
    {
        divider: true,
    },
    {
        divider:false,
        class: "warning",
        text: "Rapport",
        icon: "flag",
        function: () => {console.log("Not implemented yet")}
    },
    {
      divider:false,
      class: "warning",
      text: "Block",
      icon: "block",
      function: () => {console.log("Not implemented yet")}
  }
  ]


    const handleDotsClick = (): void => {
    // window.location.href = "profile/editBanner";
    document.body.classList.add("no-scroll");
    setOpenDropdown(true);
    }

  return (
    <div className="page-banner profile">
      <div className="banner">
        <img src={src} alt={alt} />
        {/* <div className="collapse">
          <ArrowIcon />
        </div> */}
        <div className="dots" onClick={handleDotsClick}>
          <DotsIcon />
        </div>
      
      </div>
      {openDropdown && myProfile && <Dropdown openDropdown={setOpenDropdown} buttonModels={myProfileButtons} />}
      {openDropdown && !myProfile && <Dropdown openDropdown={setOpenDropdown} buttonModels={profileButtons} />}
    </div>
    
  );
};
export default Banner;
// Path: artdefine/src/components/Banner.tsx
