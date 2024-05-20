import React, { useCallback, useState } from 'react';
import { FeedbackItemModel } from '../../model/FeedbackItemModel';
import FeedbackQuestionTypeCard from './FeedbackQuestionTypesCard';
import FeedbackShortCard from './FeedbackShortCard';


interface FeedbackItemsForPostProps {
    feedbackStack: FeedbackItemModel[];
    setFeedbackStack: (value: FeedbackItemModel[]) => void;
}

const FeedbackItemsForPost: React.FC<FeedbackItemsForPostProps> = ({
    feedbackStack,
    setFeedbackStack
    
}) => {
    const [isFeedbackEnabled, setIsFeedbackEnabled] = useState(false);
    const [openFeedback, setOpenFeedback] = useState(false);

    
    const deleteFeedbackItemFromStack = useCallback((id: string) => {
       
        setFeedbackStack( feedbackStack.filter(item => item.id !== id));
       
    }, [feedbackStack, setFeedbackStack]);
    
    const handleFeedbackToggle = useCallback(() => {
        setIsFeedbackEnabled(!isFeedbackEnabled);
    }, [isFeedbackEnabled]);

    const handleOpenFeedbackQuestionType = () => {
        setOpenFeedback(true);
    };

    return (
        <div className='feedback-items-for-post'>
            <label className='checkbox'>
                <input
                    type="checkbox"
                    checked={isFeedbackEnabled}
                    onChange={handleFeedbackToggle}
                />
                <div className='text'>Enable Feedback</div>
            </label>

            <button className='font eaves book ' onClick={handleOpenFeedbackQuestionType}>
               Add Feedback Question ...
            </button>
            {openFeedback && <FeedbackQuestionTypeCard feedbackStack={feedbackStack} setOpenFeedback={setOpenFeedback} />}

            <div className='feedback-items-list'>
                {feedbackStack.map((item, index) => (
                    <FeedbackShortCard key={index} feedbackItem={item} onDelete={deleteFeedbackItemFromStack} />
                ))}
            </div>
        </div>
    );
};

export default FeedbackItemsForPost;