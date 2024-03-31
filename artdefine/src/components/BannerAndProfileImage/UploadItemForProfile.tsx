

import React from 'react';
import UploadCard from '../UploadCard';

const UploadItemForProfile = ({ onFileChange, title } : {onFileChange: (file: File | null) => void , title : String}) => {
        
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const file = event.target.files?.[0] || null;
            onFileChange(file);
        };

        return (
            <div className='uploadImageFlow'>
                <div className='item-title'>{title}</div>
                <div className='card-item'><UploadCard onFileChange={handleFileChange} /></div>
            </div>
        );
    };

export default UploadItemForProfile;
// Path: artdefine/src/components/UploadItemForProfile.tsx