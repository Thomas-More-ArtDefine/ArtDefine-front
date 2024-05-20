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
    const [bulletPoints, setBulletPoints] = useState(['']);

    const handleAddFeedback = (option: string) => {
        setSelectedOption(option);
    };
   
    const addFeedback = () => {

        const type = () => {
            switch (selectedOption) {
                case 'open':
                    return {
                        type: 'open',
                        title: 'Open Question',
                        empty: true
                    };
                case 'bullet':
                    return {
                        type: 'bulletpoints',
                        title: 'Bullet Question',
                        empty: true,
                        content: bulletPoints
                    };
                case 'star':
                    return {
                        type: 'stars',
                        title: 'Rating Question',
                        empty: true,
                        starAmount: 5
                    };
                default:
                    return {
                        type: '',
                        title: '',
                        empty: true
                    };
            }
        };


        
        const feedbackItem: FeedbackItemModel = {
            id: Math.random().toString(),
            question: question,
            type: type(),
            
        };
        feedbackStack.push(feedbackItem);
        console.log(feedbackStack);
        setOpenFeedback(false);
    };

    const addBulletPoint = () => { 
        setBulletPoints([...bulletPoints, '']);
    };

    const removeBulletPoint = (indexToRemove: number) => { 
        setBulletPoints(bulletPoints.filter((_, index) => index !== indexToRemove));
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
                            <div className='type-question'>
                                <div className='sub-title font eaves heavy fs24 align-left '>Question</div>
                                <input className='input question' type="text" placeholder="Enter question" onChange={(e) => setQuestion(e.target.value)} />
                            </div>
                            {selectedOption === 'bullet' && (
                <div className='bulletpoint-options-container'>
                    <div className='sub-title font eaves heavy fs24 align-left'>Options:</div>
                    <div className='bullet-options flex direction-column'>
                    {bulletPoints.map((bulletPoint, index) => (
                        <div className='option' key={index}>
                            <input
                                type="text"
                                value={bulletPoint}
                                onChange={(e) => {
                                    const newBulletPoints = [...bulletPoints];
                                    newBulletPoints[index] = e.target.value;
                                    setBulletPoints(newBulletPoints);
                                }}
                            />
                            <button className='delete' onClick={() => removeBulletPoint(index)}>-</button>
                            {index === bulletPoints.length - 1 && <button className='add' onClick={addBulletPoint}>+</button>}
                        </div>
                    ))}
                    </div>
                </div>
            )}
                            <button className='add-feedback' onClick={addFeedback}>Add Feedback</button>
                           
                        </>
                    )}
                     <button className='cancel' onClick={() => setOpenFeedback(false)}>Cancel</button>
                </div>
               
        </div>
    );
};

export default FeedbackQuestionTypeCard;
