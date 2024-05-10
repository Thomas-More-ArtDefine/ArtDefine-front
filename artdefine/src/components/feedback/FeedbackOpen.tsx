import { useState } from "react";

const FeedbackOpen: React.FC< { title:string, empty:boolean, text?:string }> = ({title, empty, text }) => {
    const [string, setString] = useState<string>('');

    return (
        <div className="feedback-open">
            <div className="font fs20 eaves book purple-dark align-start feedback-title">{title}</div>
            <div className="field">
                {empty?
                    <textarea className="font eaves book" name="feedbackInput" id="feedbackInput" onChange={(e) => {setString(e.target.value)}}></textarea>
                : text?
                    <p className="filled-field font eaves book">{text}</p>
                :
                    <p className="empty-field"></p>
                }
                
                
            </div>
        </div>
    );
};

export default FeedbackOpen