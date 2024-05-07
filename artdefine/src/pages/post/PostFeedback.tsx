import { useNavigate, useParams } from "react-router-dom";
import FeedbackStars from "../../components/feedback/FeedbackStars";


export default function PostFeedback() {
    const { id } = useParams<{ id: string }>();
    const { feedback_id } = useParams<{ feedback_id: string }>();
    const navigate = useNavigate();
  return (
    <>
    <div className="margin mg16 full-width">
        <div className="eaves book font fs20 align-left flex align-center clickable" onClick={() => navigate("/post/"+id)}><i className="material-icons">chevron_left</i>Return to post</div>
        <div className="bg-card full-width feedback-page padding pd16">
            <h3>Giving Feedback</h3>
            <FeedbackStars title="Give a rating:"  empty={true} />

        </div>
    </div>   
    </>
  );
}
