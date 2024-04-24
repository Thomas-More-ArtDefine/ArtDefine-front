import { useNavigate } from "react-router-dom";

const UnderlinedTitle: React.FC<{title:string, navigateTo?:string, setCurrentStep?: React.Dispatch<React.SetStateAction<string>>, step?:string}> = ({title,navigateTo, setCurrentStep, step} ) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="title">
            {setCurrentStep !== undefined && step !== undefined ? 
            (<h3 className="flex justify-spacebetween align-end settings-page"><span>{title}</span><i className="material-icons clickable" onClick={() => setCurrentStep(step)}>arrow_back</i></h3>) 
            : navigateTo !== undefined ?
            (<h3 className="flex justify-spacebetween align-end settings-page"><span>{title}</span><i className="material-icons clickable" onClick={() => navigate(navigateTo)}>arrow_back</i></h3>) 
            :
            (<h3>{title}</h3>)
            }
                
                <div className="divider purple opacity p75"></div>
            </div>       
        </>
    );
    }

export default UnderlinedTitle;