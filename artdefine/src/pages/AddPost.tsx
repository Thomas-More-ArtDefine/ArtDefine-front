import CatButton from "../components/buttons/CatBotton";
import { ReactComponent as CrossIcon } from "../assets/Vectors/cross-black.svg";
import React, { useEffect, useState } from "react";
import UploadItemForPost from "../components/addPostFlow/UploadItemForPost";
import DetailFormForPost from "../components/addPostFlow/DetailFormForPost";
import { ReactComponent as UploadIcon } from "../assets/vectors/upload-icon-black-fill.svg";
import { ReactComponent as DetailsIcon } from "../assets/vectors/details-icon-black.svg";
import { Artwork } from "../model/PostModel";
import { useArtwork } from "../context/ArtworkContext";

export default function AddPost() {
  const [currentStep, setCurrentStep] = useState("Upload");
  const [isChanged, setIsChanged] = useState<boolean>(false);
  const {artwork, setArtwork, uploadArtwork} = useArtwork(); 

  // Handle click events for each tab
  const handleUploadClick = () => {
    setCurrentStep("Upload");
  };

  const handleDetailsClick = () => {
    setCurrentStep("Details");
  };

  const handleGroupsClick = () => {
    setCurrentStep("Groups");
  };

  const handleFeedbackClick = () => {
    setCurrentStep("Feedback");
  }


  // when resizing to, or starting from (min-width: 992px) set state to "Details"
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setCurrentStep("Details");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
 

  const onUpload = () => {
    uploadArtwork(artwork);
  }

  return (
    <div className="page add-post">
      <div className="item-title">{currentStep}</div>

      <div className="tabs">
        
        <CatButton
          text="Upload"
          icon={UploadIcon}
          onClick={handleUploadClick}
          active={currentStep === "Upload"}
        />
        <CatButton
          text="Details"
          icon={DetailsIcon}
          onClick={handleDetailsClick}
          active={currentStep === "Details"}
        />
         <CatButton
          text="Groups"
          icon={DetailsIcon}
          onClick={handleGroupsClick}
          active={currentStep === "Groups"}
        />
         <CatButton
          text="Feedback"
          icon={DetailsIcon}
          onClick={handleFeedbackClick}
          active={currentStep === "Feedback"}
        />
      </div>
      <div className="content">
        {/* Mobile */}
      {currentStep === "Upload" && (
        <>
          {
            <>
              <UploadItemForPost
                isChanged={isChanged}
                setIsChanged={setIsChanged}
                artwork={artwork}
                setArtwork={setArtwork}
              />
            </>
          }
        </>
      )}
        {/* Desktop */}
        <div id="upload-item-for-post">
              <UploadItemForPost
                isChanged={isChanged}
                setIsChanged={setIsChanged}
                artwork={artwork}
                setArtwork={setArtwork}
              />
        </div>
      {currentStep === "Details" && <>{isChanged? <DetailFormForPost artwork={artwork} setArtwork={setArtwork}/> : <div>UPload content first</div>}</>}
      {currentStep === "Groups" && <div>{<div>Not yet implemented</div>}</div>}
      {currentStep === "Feedback" && <div>{<div>Not yet implemented</div>}</div>}
      </div>
      <div>
        <button className="primary border-effect" onClick={onUpload}>Upload</button>
      </div>
    </div>
  );
}
