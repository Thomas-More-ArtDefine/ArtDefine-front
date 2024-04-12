import { useState } from 'react';
import { ReactComponent as UploadIcon } from '../assets/vectors/upload-icon.svg';

const UploadCard: React.FC< { onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void}> = ({ onFileChange : handleFileChange }) => {
    const [fileName, setFileName] = useState<string | null>(null);


    return (
        <div className='upload-card'>
            <input type='file' id='file-upload' onChange={handleFileChange} style={{ display: 'none' }} />
            <label htmlFor='file-upload' className='upload-label'>
                <div><UploadIcon /></div>
                <div>{fileName || 'Browse Files'}</div>
            </label>
        </div>
    );
};

export default UploadCard;