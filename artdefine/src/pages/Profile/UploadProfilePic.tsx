import UploadItemForProfile from '../../components/BannerAndProfileImage/UploadItemForProfile';
import src from '../../assets/images/mock-banner-pic.png';
import PreviewItem from '../../components/BannerAndProfileImage/PreviewItem';

export default function UploadProfilePic() {
    const handleFileChange = (file: File | null) => {
        console.log(file);
      };
    return (
        <div className='page upload-profile-pic-page'>
           <UploadItemForProfile onFileChange={handleFileChange} title={"Upload Profile Picture"} />;
           <PreviewItem imageSource={src} />
        </div>
    )
};