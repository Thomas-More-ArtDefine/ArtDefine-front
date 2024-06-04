import { useEffect, useState } from "react";
import {
  FeedbackItemModel,
  FeedbackStarRatingModel,
} from "../../model/FeedbackItemModel";

const FeedbackStars: React.FC<{
  question: FeedbackItemModel;
  empty: boolean;
  starAmount?: number;
  onResponse: (response: {
    feedback_result: JSON;
    question: FeedbackItemModel;
  }) => void;
  content?: JSON;
}> = ({ question, empty, starAmount, onResponse, content }) => {
  
  const [stars, setStars] = useState<number>(starAmount ? starAmount : (content as { response?: number })?.response || 0);
  const title = question.question;


  useEffect(() => {
    if (empty) {
      let stars = document.querySelectorAll(".star");
      stars.forEach((elem) => {
        elem.classList.add("clickable");
        elem.classList.remove("set");
      });
    }
    setStars(stars);
   
  }, [content, empty, stars]);

  const handleStarClick = (clickedStars: number) => {
    if (empty) {
      if (clickedStars === stars) {
        setStars(0);
      } else {
        setStars(clickedStars);
      }
      console.log("stars : ", clickedStars);
      onResponse({
        feedback_result: JSON.parse(
          JSON.stringify({
            response: clickedStars,
          })
        ),
        question: question,
      });
    }
  };

  return (
    <div className={`feedback-stars ${question.id}`}>
      <div className="feedback-title font fs20 eaves book purple-dark align-start">
        {title}
      </div>
      <div className="stars flex justify-spacebetween">
        
      {[1, 2, 3, 4, 5].map((starNumber) => (
        <i
          key={starNumber}
          className={`material-icons star ${starNumber <= stars ? 'active' : ''}`}
          onClick={() => handleStarClick(starNumber)}
        >
          star
        </i>
      ))}
      </div>
    </div>
  );
};

export default FeedbackStars;

