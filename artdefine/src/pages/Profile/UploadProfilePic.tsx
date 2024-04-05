import UploadItemForProfile from '../../components/bannerAndProfileImage/UploadItemForProfile';
import srcMock from '../../assets/images/mock-banner-pic.png';
import PreviewItem from '../../components/bannerAndProfileImage/PreviewItem';
import { useState } from 'react';

export default function UploadProfilePic() {
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
        <div className='page upload-profile-pic-page'>
           <UploadItemForProfile onFileChange={handleFileChange} title={"Upload Profile Picture"} isChanged={isChanged} setIsChanged={setIsChanged} />;
           <PreviewItem imageSource={src} isChanged={isChanged} currentImageSource={currentSrc}/>
        </div>
    )
};