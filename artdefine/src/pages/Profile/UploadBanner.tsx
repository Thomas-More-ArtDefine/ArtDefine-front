import { Link } from "react-router-dom";
import UploadItemForProfile from "../../components/bannerAndProfileImage/UploadItemForProfile";
import srcMock from "../../assets/images/mock-banner-pic.png";
import PreviewItem from "../../components/bannerAndProfileImage/PreviewItem";
import { useState } from "react";

export default function UploadBanner() {
    const [currentSrc, setCurrentSrc] = useState<string>(srcMock);
    const [src, setSrc] = useState<string>(srcMock);
    const [isChanged, setIsChanged] = useState<boolean>(false);
  
    
    const handleFileChange = (file: string) => {
        if (file) {
          setSrc(file);
          setIsChanged(true);
        }
      };


  return (
    <div className="page upload-banner-page">
      <UploadItemForProfile
        onFileChange={handleFileChange}
        title={"Upload Banner Picture"}
        isChanged={isChanged}
        setIsChanged={setIsChanged}
      />
      <PreviewItem imageSource={src} currentImageSource={currentSrc} isChanged={isChanged} />
      {isChanged ? 
      <>
      <div className="btns">
      <div className="cancel-btn">
        <button className="secondary ">
          <Link to="/profile">Cancel</Link>
        </button>
      </div>
      <div className="upload-btn">
        <button className="primary ">
          <Link to="/profile">Upload</Link>
        </button>
      </div>
      </div>
      </>
      :
      <>
      <div className="cancel-btn">
        <button className="primary ">
          <Link to="/profile">Cancel</Link>
        </button>
      </div>
      </>
      }
    </div>
  );
}
