import CatButton from "../components/Buttons/CatBotton";
import { ReactComponent as CrossIcon } from "../assets/Vectors/cross-black.svg";
import { useArtwork } from "../context/ArtworkContext";
import React, { useState } from "react";

export default function AddPost() {
  const { artwork } = useArtwork();
  const [currentStep, setCurrentStep] = useState("Upload");

  const handleUploadClick = () => {
    setCurrentStep("Upload");
  };

  const handleDetailsClick = () => {
    setCurrentStep("Details");
  };

  return (
    <div className="page add-post">
      <div className="item-title">{currentStep}</div>

      <div className="tabs">
        <CatButton
          text="Upload"
          icon={CrossIcon}
          onClick={handleUploadClick}
          active={currentStep === "Upload"}
        />
        <CatButton
          text="Details"
          icon={CrossIcon}
          onClick={handleDetailsClick}
          active={currentStep === "Details"}
        />
      </div>
      {currentStep === "Upload" && <div>{<div>Upload</div>}</div>}
      {currentStep === "Details" && <div>{<div>Details</div>}</div>}
    </div>
  );
}
