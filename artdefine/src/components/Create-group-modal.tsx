import { Link } from 'react-router-dom';

export default function CreateGroupModal({
    closeModal,
  }: {
    closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  }) {
    return(
        <div className='createGroupModal'>
            <div
            className="modalbackground"
            onClick={() => {
            closeModal(false);
            }}
            ></div>
            <div className='modalContainer'>
                <div className='modal'>
                    <div className='title'>
                        <h3>New Group</h3>
                        <div className="divider"></div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}