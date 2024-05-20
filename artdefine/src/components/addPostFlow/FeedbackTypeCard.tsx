import React from 'react';
import { FeedbackItemModel } from '../../model/FeedbackItemModel';
import { ReactComponent as OpenIcon  } from '../../assets/vectors/feedbackTypes/open.svg';
import { ReactComponent as BulletIcon  } from '../../assets/vectors/feedbackTypes/buller.svg';
import { ReactComponent as StarIcon  } from '../../assets/vectors/feedbackTypes/star.svg';


interface FeedbackTypeCardProps {
   feedbackType: FeedbackItemModel;
}

const FeedbackTypeCard: React.FC<FeedbackTypeCardProps> = ({ feedbackType }) => {
    
    
    const icon = () => {
        switch (feedbackType.type.title) {
            case 'Rating Question':
                return <StarIcon />;
            case 'Bullet Question':
                return <BulletIcon />;
            case 'Open Question':
                return <OpenIcon />;
            default:
                return <></>;
        }
    }
    
    return (
        <div className="feedback-type-card flex justify-spacebetween align-center">
             <div className='font eaves heavy fs20'>{feedbackType.type.title} </div> <div className='img'> {icon()}</div>
        </div>
    );
};

export default FeedbackTypeCard;