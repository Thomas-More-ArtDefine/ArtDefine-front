import { ChangeEvent, useState } from 'react';
import { ReactComponent as UploadIcon } from '../assets/Vectors/upload-icon.svg';

const UploadCard = ({ onFileChange : handleFileChange }: { onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void}) => {
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