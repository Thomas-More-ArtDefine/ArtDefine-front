import { useState } from "react";
import { FeedbackItemModel } from "../../model/FeedbackItemModel";

const FeedbackRadio: React.FC<{
  question: FeedbackItemModel;
  empty: boolean;
  options: string[];
  active?: number;
  onResponse: (response: {
    feedback_result: JSON;
    question: FeedbackItemModel;
  }) => void;
  content?: JSON;
}> = ({ question, empty, options, active, onResponse, content }) => {
  const [selected, setSelected] = useState<number>(0);
  const title = question.question;
  console.log("the options: ", options);

  const handleRadioClick = (val: number) => {
    setSelected(val);
    onResponse({
      feedback_result: JSON.parse(
        JSON.stringify({
          response: val,
        })
      ),
      question: question,
    });
  };

  console.log("active: ", active);
  console.log("options: ", options);
console.log("chosen: ", active !== undefined ? options[active] : undefined);
  const mappedoptions = empty ? (
   
    options.map(( option, index) => {
      
      return (
        <div key={index}>
          <input
            type="radio"
            name="radial"
            id={"option" + index.toString()}
            value={index}
            onChange={() => handleRadioClick(index)}
          />
          <label
            className="eaves book font fs18 purple-dark"
            htmlFor={"option" + index.toString()}
          >
            {option}
          </label>
        </div>
      );
    })
  ) : active !== undefined ? (
    <div key={active}>
      <input
        type="radio"
        name="radial"
        id={"option" + active.toString()}
        value={active}
        defaultChecked
      />
      <label
        className="eaves book font fs18 purple-dark"
        defaultChecked
        htmlFor={"option" + active.toString()}
      >
        {options[active]}
      </label>
    </div>
  ) : (
    ""
  );

  return (
    <div className="feedback-radial">
      <div className="feedback-title font fs20 eaves book purple-dark align-start">
        {title}
      </div>
      <div className="options">{mappedoptions}</div>
    </div>
  );
};

export default FeedbackRadio;
