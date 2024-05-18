import React, { useState } from 'react';
import { FeedbackItemModel } from '../../model/FeedbackItemModel';
import { ReactComponent as OpenIcon  } from '../../assets/vectors/feedbackTypes/open.svg';
import { ReactComponent as BulletIcon  } from '../../assets/vectors/feedbackTypes/buller.svg';
import { ReactComponent as StarIcon  } from '../../assets/vectors/feedbackTypes/star.svg';


const FeedbackQuestionTypeCard:React.FC<{
    feedbackStack: FeedbackItemModel[],
    setOpenFeedback: (value: boolean) => void;
}> = ({feedbackStack, setOpenFeedback
}) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [question, setQuestion] = useState('');
   

    const handleAddFeedback = (option: string) => {
        setSelectedOption(option);
    };
   
    const addFeedback = () => {

        const type = () => {
            switch (selectedOption) {
                case 'open':
                    return {
                        title: 'Open Question',
                        empty: true
                    };
                case 'bullet':
                    return {
                        title: 'Bullet Question',
                        empty: true,
                        options: ['']
                    };
                case 'star':
                    return {
                        title: 'Rating Question',
                        empty: true,
                        starAmount: 5
                    };
                default:
                    return {
                        title: '',
                        empty: true
                    };
            }
        };

        const feedbackItem: FeedbackItemModel = {
            id: Math.random().toString(),
            question: question,
            type: type()
        };
        feedbackStack.push(feedbackItem);
        console.log(feedbackStack);
        setOpenFeedback(false);
    };

    return (
        <div className='feedback-templates'>
            
                <div className='container'>
                    <h3>Feedback question type</h3>
                    <button className={`open ${selectedOption === 'open' ? 'active' : ''}`} onClick={() => handleAddFeedback('open')}>
                        Open Question <div className='img'>{<OpenIcon />}</div>
                    </button>
                    <button className={`bullet ${selectedOption === 'bullet' ? 'active' : ''}`} onClick={() => handleAddFeedback('bullet')}>
                        Bullet Question <div className='img'>{ <BulletIcon />}</div>
                    </button>
                    <button className={`star ${selectedOption === 'star' ? 'active' : ''}`} onClick={() => handleAddFeedback('star')}>
                        Rating Question <div className='img'> <StarIcon /></div>
                    </button>
                    {selectedOption && (
                        <>
                            <div>
                                <input className='input' type="text" placeholder="Enter question" onChange={(e) => setQuestion(e.target.value)} />
                            </div>
                            <button className='add-feedback' onClick={addFeedback}>Add Feedback</button>
                        </>
                    )}
                </div>
            
        </div>
    );
};

export default FeedbackQuestionTypeCard;
