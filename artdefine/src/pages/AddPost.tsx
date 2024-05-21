import CatButton from "../components/general/buttons/CatBotton";
import { ReactComponent as CrossIcon } from "../assets/Vectors/cross-black.svg";
import React, { useEffect, useState } from "react";
import UploadItemForPost from "../components/addPostFlow/UploadItemForPost";
import DetailFormForPost from "../components/addPostFlow/DetailFormForPost";
import { ReactComponent as UploadIcon } from "../assets/vectors/upload-icon-black-fill.svg";
import { ReactComponent as DetailsIcon } from "../assets/vectors/details-icon-black.svg";
import { Artwork, visibility } from "../model/PostModel";
import { useArtwork } from "../context/ArtworkContext";
import { useAuth } from "../context/AuthContext";
import { User } from "../model/userModel";
import FeedbackQuestionTypeCard from "../components/addPostFlow/FeedbackQuestionTypesCard";
import FeedbackItemsForPost from "../components/addPostFlow/FeedbackItemsforPost";
import { FeedbackItemModel } from "../model/FeedbackItemModel";
import GroupsForPost from "../components/addPostFlow/GroupsForPost";

export default function AddPost() {
  const [currentStep, setCurrentStep] = useState("Upload");
  const [isChanged, setIsChanged] = useState<boolean>(false);
  const [feedbackStack, setFeedbackStack] = useState<FeedbackItemModel[]>([]);
  const { uploadArtwork} = useArtwork(); 
  const {user, joinedGroups} = useAuth();

  const [tempArtwork, setTempArtwork] = useState<Artwork>({
    id: "0",
    user_id: user?.id ? user.id : "0",
    post_content: "",
    post_title: "",
    post_description: "",
    post_medium: "",
    post_visibility: visibility.PRIVATE,
    user: user ? user : {} as User,
    folders: [],
    post_tags: ""
  });



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
    if (user) {
      tempArtwork.user = user;
      if (feedbackStack.length > 0) {
        tempArtwork.feedbackStack = feedbackStack;
      }
      uploadArtwork(tempArtwork);
    } else {
      console.log("User not logged in");
    }
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
          text="Places"
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
                artwork={tempArtwork}
                setArtwork={setTempArtwork}
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
                artwork={tempArtwork}
                setArtwork={setTempArtwork}
              />
        </div>
      {currentStep === "Details" && <>{isChanged? <DetailFormForPost artwork={tempArtwork} setArtwork={setTempArtwork}/> : <div>UPload content first</div>}</>}
      {currentStep === "Groups" && <>{<GroupsForPost userGroups={joinedGroups} />}</>}
      {currentStep === "Feedback" && <>{<><FeedbackItemsForPost feedbackStack={feedbackStack} setFeedbackStack={setFeedbackStack}  /></>}</>}
      </div>
      <div>
        <button className="primary border-effect" onClick={onUpload}>Upload</button>
      </div>
    </div>
  );
}
