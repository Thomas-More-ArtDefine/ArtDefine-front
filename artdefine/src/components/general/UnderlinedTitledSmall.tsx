import { useNavigate } from "react-router-dom";

const UnderlinedTitleSmall: React.FC<{title:string, icon?:boolean}> = ({title, icon = false} ) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="title">
            {icon ? 
                (<h4 className="flex justify-spacebetween align-end settings-page"><span>{title}</span><i className="material-icons clickable" onClick={() => console.log("open folder modal")}>folder</i></h4>)
                :
                (<h4>{title}</h4>)
                }
                <div className="divider purple opacity p75"></div>
            </div>       
        </> 
    );
    }

export default UnderlinedTitleSmall;