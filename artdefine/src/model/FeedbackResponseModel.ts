import { FeedbackItemModel } from "./FeedbackItemModel";
import { User } from "./userModel";


export interface FeedbackResponse {
    user: User;
    question: FeedbackItemModel;
    feedback_result: JSON;
}