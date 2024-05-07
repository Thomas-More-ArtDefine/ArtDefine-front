import { useState } from "react";

const FeedbackRadio: React.FC< { title:string, empty:boolean, options:string[], active?:number }> = ({title, empty, options, active }) => {
    const [selected, setSelected] = useState<number>(0);

    const handleRadioClick = (val: number) => {
        setSelected(val);
    };

    let index = 0;
    const mappedoptions = empty?options.map((option) =>{
        index++;
    return  <div key={index}>
                <input type="radio" name="radial" id={"option"+index.toString()} value={index}/>
                <label className="eaves book font fs18 purple-dark" htmlFor={"option"+index.toString()}>{option}</label>
            </div>
    }
    ): active? <div key={active}>
            <input type="radio" name="radial" id={"option" + active.toString()} value={active}/>
            <label className="eaves book font fs18 purple-dark" defaultChecked htmlFor={"option"+active.toString()}>{options[active]}</label>
        </div>: '';

    return (
        <div className="feedback-radial">
        <div className="font fs20 eaves book purple-dark align-start">{title}</div>
        <div className="options">
            {mappedoptions}
        </div>
    </div>
    );
};

export default FeedbackRadio;
