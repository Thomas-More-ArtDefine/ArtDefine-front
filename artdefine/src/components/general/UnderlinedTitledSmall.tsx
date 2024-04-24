import { useNavigate } from "react-router-dom";

const UnderlinedTitleSmall: React.FC<{title:string, icon?:boolean, set?:React.Dispatch<React.SetStateAction<boolean>>}> = ({title, icon = false, set} ) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="title">
            {icon && set !== undefined ? 
                (<h4 className="flex justify-spacebetween align-end settings-page"><span>{title}</span><i className="material-icons clickable" onClick={() => set(true)}>folder</i></h4>)
                :
                (<h4>{title}</h4>)
                }
                <div className="divider purple opacity p75"></div>
            </div>       
        </> 
    );
    }

export default UnderlinedTitleSmall;