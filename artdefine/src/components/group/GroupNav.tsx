import { useEffect, useState } from "react";
import CatButton from "../buttons/CatBotton";
import { ReactComponent as HomeIcon } from "../../assets/vectors/home-solid-black.svg";
import { ReactComponent as GalleryIcon } from "../../assets/vectors/gallery-solid-black.svg";
import { ReactComponent as ChatIcon } from "../../assets/vectors/chat-solid-black.svg";
import GroupHome from "./GroupHome";

const GroupNav: React.FC<{handleStepChange: React.Dispatch<React.SetStateAction<string>>, currentStep:string}> = ({handleStepChange:setCurrentStep, currentStep}) => {
  
  const [isChanged, setIsChanged] = useState<boolean>(false);

  const handleHomeClick = ():void => {
    setCurrentStep("Home");
  };

  const handleGalleryClick = ():void => {
    setCurrentStep("Gallery");
  };

  const handleChatClick = ():void => {
    setCurrentStep("Chat");
  };

  // when resizing to, or starting from (min-width: 992px) set state to "Details"
  useEffect(() => {
    const handleResize = ():void => {
      if (window.innerWidth >= 992) {
        setCurrentStep("Home");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="group-nav">
        <CatButton
          text="Home"
          icon={HomeIcon}
          onClick={handleHomeClick}
          active={currentStep === "Home"}
        />
        <CatButton
          text="Gallery"
          icon={GalleryIcon}
          onClick={handleGalleryClick}
          active={currentStep === "Gallery"}
        />
        {/* <CatButton
          text="Chat"
          icon={ChatIcon}
          onClick={handleChatClick}
          active={currentStep === "Chat"}
        /> */}
      </div>
      
    </>
  );
};

export default GroupNav;
