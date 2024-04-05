import React, { useState } from 'react';

export default function Feed() {
    const [globalActive, setGlobalActive] = useState<boolean>(false);
    const [personalActive, setPersonalActive] = useState<boolean>(true);
    const [randomActive, setRandomActive] = useState<boolean>(false);

    const handleFeedButtonClick = (button:string) => {
        switch (button) {
            case "global":
                setGlobalActive(true);
                setPersonalActive(false);
                setRandomActive(false);
                break;
        
            case "personal":
                setGlobalActive(false);
                setPersonalActive(true);
                setRandomActive(false);
                break;
            case "random":
                setGlobalActive(false);
                setPersonalActive(false);
                setRandomActive(true);
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <div className='feed-btns'>
                <div className='subnav-button'>
                    <button className={((globalActive) ? "active": "")} onClick={() => handleFeedButtonClick("global")}><i className="material-icons">public</i></button>
                    <div className='button-text'>Global</div>
                </div>
                <div className='subnav-button'>
                    <button className={((personalActive) ? "active": "")} onClick={() => handleFeedButtonClick("personal")}><i className="material-icons">home</i></button>
                    <div className='button-text'>My feed</div>
                </div>
                <div className='subnav-button'>
                    <button className={((randomActive) ? "active": "")} onClick={() => handleFeedButtonClick("random")}><i className="material-icons">shuffle</i></button>
                    <div className='button-text'>Random</div>
                </div>            
            </div>
            <div className='feed'>

            </div>
        </div>
    );
}