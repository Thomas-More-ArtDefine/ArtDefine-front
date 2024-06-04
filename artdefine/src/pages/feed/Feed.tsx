import { useFeed } from "../../context/FeedContext";
import { useEffect, useState } from 'react';
import ArtworkCard from "../../components/cards/Artwork-card";
import { useAuth } from "../../context/AuthContext";



export default function Feed() {
    const { artworks, findRandomFeed, findGlobalFeed, findMainFeed } = useFeed();
    const [globalActive, setGlobalActive] = useState<boolean>(false);
    const [personalActive, setPersonalActive] = useState<boolean>(true);
    const [randomActive, setRandomActive] = useState<boolean>(false);
    const {user} = useAuth();

    const { isTop } = useFeed();

    useEffect(() => {
        findGlobalFeed();
    }, []);

    setTimeout(() => {
        if (document.getElementsByClassName("no-posts")[0] !== undefined) {
            document.getElementsByClassName("no-posts")[0].innerHTML = "No posts could be loaded."
        }
    }, 3000);

    const handleFeedButtonClick = (button:string) => {
        switch (button) {
            case "global":
                setGlobalActive(true);
                setPersonalActive(false);
                setRandomActive(false);
                findGlobalFeed();
                break;
        
            case "personal":
                setGlobalActive(false);
                setPersonalActive(true);
                setRandomActive(false);
                if (user) {
                    findMainFeed(user?.id);
                }
                
                break;
            case "random":
                setGlobalActive(false);
                setPersonalActive(false);
                setRandomActive(true);
                findRandomFeed();
                break;
            default:
                break;
        }
    };

    const feedList = artworks.map(artwork =>
        <ArtworkCard 
                src={artwork.post_content} 
                title={artwork.post_title}
                creator={artwork.user.user_name}
                postid={artwork.id}
                key={artwork.id} />
      );

    return (
        <div className='feedpage '  >
            <div className='feed-btns fixed'>
            <div className='subnav-button'>
                    <button className={((personalActive) ? "active": "")} onClick={() => handleFeedButtonClick("personal")}><i className="material-icons">home</i></button>
                    {isTop && <div className='button-text'>My feed</div>}
                </div>
                <div className='subnav-button'>
                    <button className={((globalActive) ? "active": "")} onClick={() => handleFeedButtonClick("global")}><i className="material-icons">public</i></button>
                    {isTop && <div className='button-text'>Global</div>}
                </div>
                
                <div className='subnav-button'>
                    <button className={((randomActive) ? "active": "")} onClick={() => handleFeedButtonClick("random")}><i className="material-icons">shuffle</i></button>
                    {isTop && <div className='button-text'>Random</div>}
                </div>            
            </div>
            <div className='feed'>
                {artworks.length !== 0 ? (
                    <div>{feedList}</div>
                ) : (
                    <div className="no-posts">Loading...</div>
                )}
            </div>
        </div>
    );

}