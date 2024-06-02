import { useCallback, useState } from 'react';
import { ReactComponent as CrossIcon } from '../assets/vectors/cross-black.svg';

const WelcomeCard: React.FC = () => {
    const [open, setOpen] = useState<boolean>(true);
    const onClose = useCallback(() => {
        setOpen(false);
    }, [open, setOpen]);

    return (
        <div className={`welcome-pop-up ${open ? '' : 'close'}`}>
            <div className="card-header">
                <CrossIcon onClick={onClose} />
            </div>
            <div className="card-body font align-left eaves book fs20">
                <h3>Welcome to ArtDefine</h3>
                <p>
                    This project is made by students. <br/> Here are a few caveats to take into account:
                </p>
                <ul>
                    <li>Not all features are implemented.</li>
                    <li>It is best experienced on a phone screen.</li>
                    <li>The <strong>login page is merely a mock</strong>, you can input whatever you want.</li>

                    <li>
                        The backend is hosted on a free-to-use platform, which is great. <br />
                        The downside is <strong>it could take up to a minute to start up</strong> after being idle.<br /><br />
                        <span className='font sunset'><strong>So if the website is not loading content, come back in a minute.</strong></span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default WelcomeCard;
