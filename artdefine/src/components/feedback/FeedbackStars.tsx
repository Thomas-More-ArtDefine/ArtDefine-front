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
}> = ({ question, empty, starAmount, onResponse }) => {
  const [stars, setStars] = useState<number>(starAmount ? starAmount : 0);
  const title = question.question;
  useEffect(() => {
    if (empty) {
      let stars = document.querySelectorAll(".star");
      stars.forEach((elem) => {
        elem.classList.add("clickable");
        elem.classList.remove("set");
      });
    }
    setUIStars(stars);
  });

  const handleStarClick = (clickedStars: number) => {
    if (empty) {
      if (clickedStars === stars) {
        setStars(0);
      } else {
        setStars(clickedStars);
      }
      setUIStars(stars);
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
    <div className="feedback-stars">
      <div className="feedback-title font fs20 eaves book purple-dark align-start">
        {title}
      </div>
      <div className="stars flex justify-spacebetween">
        <i
          className="material-icons set star"
          id="star1"
          onClick={() => handleStarClick(1)}
        >
          star
        </i>
        <i
          className="material-icons set star"
          id="star2"
          onClick={() => handleStarClick(2)}
        >
          star
        </i>
        <i
          className="material-icons set star"
          id="star3"
          onClick={() => handleStarClick(3)}
        >
          star
        </i>
        <i
          className="material-icons set star"
          id="star4"
          onClick={() => handleStarClick(4)}
        >
          star
        </i>
        <i
          className="material-icons set star"
          id="star5"
          onClick={() => handleStarClick(5)}
        >
          star
        </i>
      </div>
    </div>
  );
};

export default FeedbackStars;

function setUIStars(amount: number) {
  resetUIStars();
  for (let index = 0; index < amount + 1; index++) {
    let star = document.getElementById("star" + index.toString());
    if (star) {
      star.classList.add("active");
    }
  }
}

function resetUIStars() {
  let stars = document.querySelectorAll(".star");
  stars.forEach((elem) => {
    elem.classList.remove("active");
  });
}
