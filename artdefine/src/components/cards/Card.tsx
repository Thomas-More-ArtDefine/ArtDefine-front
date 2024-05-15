
import {ReactComponent as ArrowIcon} from "../../assets/vectors/arrow-right-black-.svg";

const Card = ({
    title,
    hasMore = false, // optional
    moreClickHandler = () => console.log("not yet implemented"), // optional
    content,
    cssProperty, // optional
    isUser,
  }: {
    title: string;
    hasMore?: boolean;
    moreClickHandler?: () => void;
    content: JSX.Element;
    cssProperty?: string;
    isUser:boolean;
  }) => {

    return (
        <div className={cssProperty + " card"}>
        <div className={isUser? "title font icecream purple-dark fs24":'title font eaves heavy purple-dark fs24'}>{title} {hasMore && (<button className="button has-icon" onClick={moreClickHandler}>See more <ArrowIcon/></button>)} </div>
        <div className="card-content">
            {content}
        </div>
      </div>
    );
    }


export default Card;

