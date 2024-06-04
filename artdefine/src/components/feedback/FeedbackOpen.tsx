import { useState } from "react";
import { FeedbackItemModel } from "../../model/FeedbackItemModel";


const FeedbackOpen: React.FC<{
  question: FeedbackItemModel;
  empty: boolean;
  onResponse: (response: {
    feedback_result: JSON;
    question: FeedbackItemModel;
  }) => void;
  content?: JSON;
}> = ({ question, empty, onResponse, content }) => {
const [string, setString] = useState<string>("");
const title = question.question;
console.log("the content: ", JSON.stringify(content));
  const text = (content as { response?: string })?.response;

  return (
    <div className="feedback-open">
      <div className="font fs20 eaves book purple-dark align-start feedback-title">
        {title}
      </div>
      <div className="field">
        {empty ? (
          <textarea
            className="font eaves book"
            name="feedbackInput"
            id="feedbackInput"
            onChange={(e) => {
                setString(e.target.value);
                onResponse({
                    feedback_result: JSON.parse(`{"response": "${e.target.value}"}`),
                  question: question,
                });
            }}
          ></textarea>
        ) : text ? (
          <p className="filled-field font eaves book">{text}</p>
        ) : (
          <p className="empty-field"></p>
        )}
      </div>
    </div>
  );
};

export default FeedbackOpen;
