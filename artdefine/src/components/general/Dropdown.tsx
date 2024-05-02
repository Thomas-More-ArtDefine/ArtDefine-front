import { useNavigate } from "react-router-dom";
import { DropdownButtonModel } from "../../model/DropdownButtonsModel";

const Dropdown: React.FC<{ openDropdown: React.Dispatch<React.SetStateAction<boolean>>; buttonModels: DropdownButtonModel[]; }> = ({ openDropdown, buttonModels }) => {
    // const navigate = useNavigate();
    // const buttons: DropdownButtonModel[] = [
    //     {
    //         divider:false,
    //         class: "navigate",
    //         text: "test btn 1",
    //         icon: "pets",
    //         function: () => {navigate("/test")}
    //     },
    //     {
    //         divider: true,
    //     },
    //     {
    //         divider:false,
    //         class: "link",
    //         text: "test btn 2",
    //         icon: "grade",
    //         function: () => {navigate("/test2"); console.log("testing");}
    //     }
    // ]
    
    let index=0;
    const buttonList = buttonModels.map(values => {
        if (values.divider === true) {
            index++;
            return <div className="divider red" key={index}></div>
        }else{
            index++;
            return <button className={"dropdown-btn flex justify-spacebetween align-center " + values.class} key={index} onClick={values.function}><span>{values.text}</span><i className="material-icons">{values.icon}</i></button> 
        }
    })
    
    return (
        <>
        <div
            className="dropdownbackground"
            onClick={() => {
                openDropdown(false);
                document.body.classList.remove("no-scroll");
            }}
        >

        </div>
        <div className="dropdown position absolute">
            {buttonList}
            {/* <button className="dropdown-btn flex justify-spacebetween align-center"><span>test btn</span><i className="material-icons">done</i></button>
            <button className="dropdown-btn flex justify-spacebetween align-center"><span>test btn</span><i className="material-icons">done</i></button>
            <div className="divider red"></div>
            <button className="dropdown-btn flex justify-spacebetween align-center"><span>test btn</span><i className="material-icons">done</i></button> */}
        </div>
        </>
      
    );
  };
  
  export default Dropdown;
