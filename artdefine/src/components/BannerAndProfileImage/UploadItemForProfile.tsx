import React from 'react';



  
  const UploadItemForProfile = ({ onFileChange, title } : {onFileChange: (file: File | null) => void , title : String}) => {
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0] || null;
      onFileChange(file);
    };

    return (
        <div>
            <div className='item-title'>{title}</div>
            <div className='item'>
               <input type='file' onChange={handleFileChange} />
            </div>
        </div>
    );
};

export default UploadItemForProfile;
// Path: artdefine/src/components/UploadItemForProfile.tsx