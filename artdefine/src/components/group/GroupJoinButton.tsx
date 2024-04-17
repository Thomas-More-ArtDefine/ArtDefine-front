import { useNavigate } from "react-router-dom";
import { GroupJoin, groupVisibility } from "../Create-group-modal";

const GroupJoinButton: React.FC<{joined:boolean, groupjoin:GroupJoin, visibility:groupVisibility, src:string}> = ({joined,groupjoin,visibility,src} ) => {
    const navigate = useNavigate();
    
    
    
    let button;
    if (groupjoin === GroupJoin.OPEN && joined === false) {
        button = <div className="join-button join" onClick={() => navigate("/group/"+src)}><i className="material-icons">person_add</i></div>;
    }else if (groupjoin === GroupJoin.INVITE && joined === false) {
        button = <div className="join-button inspect" onClick={() => navigate("/group/"+src)}><i className="material-icons">pageview</i></div>;
    }else if (groupjoin === GroupJoin.APPLY && joined === false) {
        button = <div className="join-button inspect" onClick={() => navigate("/group/"+src)}><i className="material-icons">pageview</i></div>;
    }else if (joined === true) {
        button = <div className="join-button" onClick={() => navigate("/group/"+src)}><i className="material-icons">arrow_right</i></div>;
    }else if (visibility === groupVisibility.PRIVATE) {
        button = <div className="join-button private"><i className="material-icons">lock</i></div>;
    }
    
    return (
        <>
            {button}
        </>
    );
    }

export default GroupJoinButton;