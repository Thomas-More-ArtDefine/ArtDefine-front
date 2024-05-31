import { useNavigate, useParams } from "react-router-dom";
import FeedbackStars from "../../components/feedback/FeedbackStars";
import FeedbackRadio from "../../components/feedback/FeedbackRadio";
import FeedbackOpen from "../../components/feedback/FeedbackOpen";
import { useArtwork } from "../../context/ArtworkContext";
import { useEffect, useState } from "react";
import { Artwork } from "../../model/PostModel";
import { FeedbackItemModel, FeedbackRatioModel } from "../../model/FeedbackItemModel";

export default function PostFeedback() {
  const { id } = useParams<{ id: string }>();

  const { findArtwork } = useArtwork();
  const { feedback_id } = useParams<{ feedback_id: string }>();
  const navigate = useNavigate();
  const [artwork, setArtwork] = useState<Artwork>();

  const [feedbackQuestions, setFeedbackQuestions] = useState<
    FeedbackItemModel[]
  >([]);

  useEffect(() => {
    if (id) {
      findArtwork(id).then((res) => {
        if (res) {
          setArtwork(res);
          if (res.feedbackStack) {
            setFeedbackQuestions(res.feedbackStack);
          } else {
            setFeedbackQuestions([]);
          }
        }
      });
    }
  }, [id]);

  return (
    <>
      <div className="margin mg16 full-width">
        <div
          className="eaves book font fs20 align-left flex align-center clickable"
          onClick={() => navigate("/post/" + id)}
        >
          <i className="material-icons">chevron_left</i>Return to post
        </div>
        <div className="bg-card full-width feedback-page padding pd16">
          <h3>Giving Feedback</h3>
          {feedbackQuestions.map((question) => {
            if (question.type.type === "stars") {
              return <FeedbackStars title={question.question} empty={true} />;
            } else if (question.type.type === "bulletpoints") {
              console.log((question.type as FeedbackRatioModel).content);
              return (
                <FeedbackRadio
                  title={question.question}
                  empty={true}
                  options={(question.type as FeedbackRatioModel).content}
                />
              );
            } else if (question.type.type === "open") {
              return <FeedbackOpen title={question.question} empty={true} />;
            }
          })}
          <button className="upload-feedback">Upload Feedback</button>
        </div>
      </div>
    </>
  );
}
