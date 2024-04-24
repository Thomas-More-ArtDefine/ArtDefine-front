const UnderlinedTitle: React.FC<{title:string, setCurrentStep?: React.Dispatch<React.SetStateAction<string>>, step?:string}> = ({title,setCurrentStep, step} ) => {
    return (
        <>
            <div className="title">
            {setCurrentStep !== undefined && step !== undefined ? 
            (<h3 className="flex justify-spacebetween align-end settings-page"><span>{title}</span><i className="material-icons clickable" onClick={() => setCurrentStep(step)}>arrow_back</i></h3>) 
            : 
            (<h3>{title}</h3>)
            }
                
                <div className="divider purple opacity p75"></div>
            </div>       
        </>
    );
    }

export default UnderlinedTitle;