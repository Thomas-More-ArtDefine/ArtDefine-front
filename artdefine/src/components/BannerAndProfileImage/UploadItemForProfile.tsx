

import React, { useState } from 'react';
import UploadCard from '../UploadCard';
import { ReactComponent as CrossIcon } from '../../assets/Vectors/cross-black.svg';

const UploadItemForProfile = ({ onFileChange, title, isChanged, setIsChanged } : {onFileChange: (file: string) => void , title : String, isChanged : boolean, setIsChanged :React.Dispatch<React.SetStateAction<boolean>>}) => {
        
    
    const [fileName, setFileName] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const file = event.target.files?.[0] || null;
            if (file) {
                setFileName(file.name);
                const fileURL = URL.createObjectURL(file);
                onFileChange(fileURL);
            }
            
        };

    function hancleClick(): void {
        setFileName(null);
        setIsChanged(false);
    }

        return (
            <div className='uploadImageFlow'>
                <div className='item-title'>{title}</div>
                {isChanged ? 
                <>
                <div className='file-name-container'><div className='file-name'>{fileName} <CrossIcon onClick={hancleClick}/></div></div>
                </> 
                : 
                <>
                <div className='card-item'><UploadCard onFileChange={handleFileChange} /></div>
                </>
                }
                
            </div>
        );
    };

export default UploadItemForProfile;
// Path: artdefine/src/components/UploadItemForProfile.tsx