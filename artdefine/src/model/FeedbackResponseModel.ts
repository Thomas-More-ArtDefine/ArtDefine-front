import { FeedbackItemModel } from "./FeedbackItemModel";
import { User } from "./userModel";


export interface FeedbackResponse {
    user_id: User["id"];
    question?: FeedbackItemModel;
    question_id: FeedbackItemModel["id"];
    feedback_result: JSON;
}