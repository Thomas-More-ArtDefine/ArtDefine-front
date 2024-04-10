
import {ReactComponent as ArrowIcon} from "../../assets/vectors/arrow-right-black-.svg";

const Card = ({
    title,
    hasMore = false, // optional
    moreClickHandler = () => console.log("not yet implemented"), // optional
    content,
    cssProperty, // optional
  }: {
    title: string;
    hasMore?: boolean;
    moreClickHandler?: () => void;
    content: JSX.Element;
    cssProperty?: string;
    
  }) => {

    return (
        <div className={cssProperty + " card"}>
        <div className="title">{title} {hasMore && (<button className="button has-icon" onClick={moreClickHandler}>See more <ArrowIcon/></button>)} </div>
        <div className="card-content">
            {content}
        </div>
      </div>
    );
    }


export default Card;

