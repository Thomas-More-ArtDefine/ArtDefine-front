import { GroupJoin, groupVisibility } from "../group/Create-group-modal";

const GroupJoinButton: React.FC<{joined:boolean, groupjoin:GroupJoin, visibility:groupVisibility, src:string}> = ({joined,groupjoin,visibility,src} ) => {
    
    let button;
    if (groupjoin === GroupJoin.OPEN && joined === false) {
        button = <div className="join-button join"><i className="material-icons">person_add</i></div>;
    }else if (groupjoin === GroupJoin.INVITE && joined === false) {
        button = <div className="join-button inspect" ><i className="material-icons">pageview</i></div>;
    }else if (groupjoin === GroupJoin.APPLY && joined === false) {
        button = <div className="join-button inspect" ><i className="material-icons">pageview</i></div>;
    }else if (joined === true) {
        button = <div className="join-button" ><i className="material-icons">arrow_right</i></div>;
    }
    
    if (visibility === groupVisibility.PRIVATE) {
        button = <div className="join-button private"><i className="material-icons">lock</i></div>;
    }

    if (joined) {
        button = <div className="join-button inspect"><i className="material-icons" >chevron_right</i></div>;
    }
    
    return (
        <>
            {button}
        </>
    );
    }

export default GroupJoinButton;