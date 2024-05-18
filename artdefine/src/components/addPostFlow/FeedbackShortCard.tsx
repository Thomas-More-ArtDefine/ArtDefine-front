import React from 'react';
import { FeedbackItemModel } from '../../model/FeedbackItemModel';
import FeedbackTypeCard from './FeedbackTypeCard';



interface FeedbackShortCardProps {
    feedbackItem: FeedbackItemModel;
    onDelete: (id: string) => void;
}

const FeedbackShortCard: React.FC<FeedbackShortCardProps> = ({ feedbackItem, onDelete }) => {
    const handleDelete = () => {
        console.log(feedbackItem.id);
        onDelete(feedbackItem.id);
    };

    return (
        <div className="feedback-card flex  ">
            <FeedbackTypeCard feedbackType={feedbackItem} />
            <div className="feedback-question font padding pd8 align-left eaves book fs18">{feedbackItem.question}</div>
            <button className="delete-button delete self-center" onClick={handleDelete}>
                Delete
            </button>
        </div>
    );
};

export default FeedbackShortCard;