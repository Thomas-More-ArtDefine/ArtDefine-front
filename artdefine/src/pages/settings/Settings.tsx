import UnderlinedTitle from "../../components/general/UnderlinedTitled";

export default function Settings() {

    
    
    return (
        <>
        <div className="general-settings">
            <UnderlinedTitle title="Settings" />  
            <button className="icon"><span>Account Information</span><i className="material-icons">person</i></button>
            <button className="icon"><span>Profile Customization</span><i className="material-icons">brush</i></button>
        </div>
          
        </>
    );
}