import CatButton from "../components/Buttons/CatBotton";
import { ReactComponent as CrossIcon } from "../assets/Vectors/cross-black.svg";
import React, { useState } from "react";
import UploadItemForPost from "../components/addPostFlow/UploadItemForPost";
import DetailFormForPost from "../components/addPostFlow/DetailFormForPost";
import { ReactComponent as UploadIcon } from "../assets/Vectors/upload-icon-black-fill.svg";
import { ReactComponent as DetailsIcon } from "../assets/Vectors/details-icon-black.svg";

export default function AddPost() {
  const [currentStep, setCurrentStep] = useState("Upload");
  const [isChanged, setIsChanged] = useState<boolean>(false);


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
      {currentStep === "Upload" && (
        <>
          {
            <>
              <UploadItemForPost
                isChanged={isChanged}
                setIsChanged={setIsChanged}
              />
            </>
          }
        </>
      )}
      {currentStep === "Details" && <>{isChanged? <DetailFormForPost/> : <div>UPload content first</div>}</>}
      {currentStep === "Groups" && <div>{<div>Not yet implemented</div>}</div>}
      {currentStep === "Feedback" && <div>{<div>Not yet implemented</div>}</div>}
      </div>
      <div>
        <button className="primary border-effect">Upload</button>
      </div>
    </div>
  );
}
