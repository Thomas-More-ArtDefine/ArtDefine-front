import { Link } from "react-router-dom";
import UploadItemForProfile from "../../components/BannerAndProfileImage/UploadItemForProfile";
import src from "../../assets/images/mock-banner-pic.png";
import PreviewItem from "../../components/BannerAndProfileImage/PreviewItem";

export default function UploadBanner() {
  const handleFileChange = (file: File | null) => {
    console.log(file);
  };
  return (
    <div className="page upload-banner-page">
      <UploadItemForProfile
        onFileChange={handleFileChange}
        title={"Upload Banner Picture"}
      />
      <PreviewItem imageSource={src} />
      <div className="cancel-btn">
        <button className="primary ">
          <Link to="/profile">Cancel</Link>
        </button>
      </div>
    </div>
  );
}
