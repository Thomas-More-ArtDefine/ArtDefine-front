import { useNavigate, useParams } from "react-router-dom";
import FeedbackStars from "../../components/feedback/FeedbackStars";
import FeedbackRadio from "../../components/feedback/FeedbackRadio";
import FeedbackOpen from "../../components/feedback/FeedbackOpen";
import { useArtwork } from "../../context/ArtworkContext";
import { useCallback, useEffect, useState } from "react";
import { Artwork } from "../../model/PostModel";
import { FeedbackItemModel, FeedbackRatioModel } from "../../model/FeedbackItemModel";
import { FeedbackResponse } from "../../model/FeedbackResponseModel";
import { useAuth } from "../../context/AuthContext";

export default function PostFeedback() {
  const { id } = useParams<{ id: string }>();
  const {user} = useAuth();
  const { findArtwork, uploadFeedbackResponse } = useArtwork();
  const { feedback_id } = useParams<{ feedback_id: string }>();
  const navigate = useNavigate();
  const [artwork, setArtwork] = useState<Artwork>();
 
  const [responseStack, setResponseStack] = useState<FeedbackResponse[]>([]);


  const handleResponse = useCallback((response: { feedback_result: JSON, question: FeedbackItemModel }) => {
    const isQuestionInStack = responseStack.some((item) => item.question.id === response.question.id);
    if (isQuestionInStack) {
      // Question is already in the stack, handle accordingly
      console.log("Question is already in the stack, updating...");
      const updatedStack = responseStack.map((item) => {
        if (item.question.id === response.question.id) {
          return {
            ...item,
            feedback_result: response.feedback_result,
          };
        }
        return item;
      });
      setResponseStack(updatedStack);
    } else {
      // Question is not in the stack, add it
      console.log("Question is not in the stack, adding...");
      setResponseStack(prevResponses => [...prevResponses, {
        feedback_result: response.feedback_result,
        user: user!,
        question: response.question
      }]);
    }
  }, [responseStack]);

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

  const handleUpload = useCallback(async () => {
    if (artwork) {
      try {
        const res = await uploadFeedbackResponse(responseStack);
        console.log("Feedback uploaded: ", res);
        navigate("/post/" + id);
      } catch (error) {
        console.error("Error uploading feedback: ", error);
      }
    }
  }, [artwork, responseStack]);

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
              return <FeedbackStars question={question} empty={true} onResponse={handleResponse} />;
            } else if (question.type.type === "bulletpoints") {
              console.log((question.type as FeedbackRatioModel).content);
              return (
                <FeedbackRadio
                  question={question}
                  empty={true}
                  options={(question.type as FeedbackRatioModel).content}
                  onResponse={handleResponse}
                />
              );
            } else if (question.type.type === "open") {
              return <FeedbackOpen question={question} empty={true} onResponse={handleResponse} />;
            }
          })}
          <button className="upload-feedback" onClick={handleUpload}>Upload Feedback</button>
        </div>
      </div>
    </>
  );
}
