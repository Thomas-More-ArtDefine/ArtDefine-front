import { useState } from 'react';

export enum groupVisibility {
    PRIVATE = "private",
    PUBLIC = "public"
  }
  export enum GroupJoin {
    OPEN = "open",
    APPLY = "apply",
    INVITE = "invite"
  }


export default function CreateGroupModal({
    closeModal,
  }: {
    closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  }) {
    const [groupname, setGroupname] = useState("");
    const [userLimit, setUserLimit] = useState("10");
    const [visibility, setVisibility] = useState(false); // false = private, true = public
    const [join, setJoin] = useState(GroupJoin.INVITE);
    const [maxUserLimit, setMaxUserLimit] = useState(10);


    const handleCreateClick =() => {
        let groupvisibility: groupVisibility =groupVisibility.PRIVATE;
        if (visibility) {
            groupvisibility = groupVisibility.PUBLIC;
        }
        const value = {
            group_name: groupname,
            group_userlimit: userLimit,
            group_setting_visibility: groupvisibility,
            creator_id: 1,
            group_setting_join: join
        };
        console.log("save group");
        console.log(value);
        closeModal(false);
    };

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
                    <form>
                        <div className='groupname'>
                            <label htmlFor="groupname">Group name</label>
                            <input id='groupname' name="groupname"  value={groupname} onChange={(e) => setGroupname(e.target.value)} type="text" placeholder='GroupName' />
                        </div>
                        <div className='userlimit'>
                            <label htmlFor="userlimit">User limit</label>
                            <div className='slidercontainer'>
                                <input type="range" name="userlimit" min="1" max={maxUserLimit} value={userLimit} onChange={(e) => setUserLimit(e.target.value)} id="userlimit"></input>
                                <span>{userLimit}</span>
                            </div>
                        </div>
                        <div className='visbility'>
                        <label htmlFor="visibility">Visibility</label>
                            <div className='togglecontainer'>
                            
                                {/* <span className='option1'>Private</span> */}
                                    <span className='toggle'>
                                        <input id='visibility' name="visibility" type="checkbox" checked={visibility} onChange={(e) => setVisibility(e.target.checked)} />
                                        <span className="slider"><span className='switch'></span></span>
                                    </span>
                                <span className='option'>{visibility ? ("Public") : ("Private")}</span>
                            </div>
                            
                        </div>
                        <div className='joinsetting'>
                            <p>Join setting</p>
                            <div className='radiocontainer'>
                                <div>
                                    
                                    <input type="radio" id="invite" name="joinoption" checked={join === GroupJoin.INVITE} value={GroupJoin.INVITE} onChange={(e) => setJoin(GroupJoin.INVITE)} />
                                    <span className='bg'></span>
                                    <span className='label'>Invite Only</span>
                                </div>
                                <div>
                                    <input type="radio" id="apply" name="joinoption" checked={join === GroupJoin.APPLY} value={GroupJoin.APPLY} onChange={(e) => setJoin(GroupJoin.APPLY)}  />
                                    <span className='bg'></span>
                                    <span className='label'>Apply</span>
                                </div>
                                <div>
                                    <input type="radio" id="open" name="joinoption" checked={join === GroupJoin.OPEN} value={GroupJoin.OPEN} onChange={(e) => setJoin(GroupJoin.OPEN)} />
                                    <span className='bg'></span>
                                    <span className='label'>Open</span>
                                    
                                </div>
                            </div>
                            
                        </div>
                        <div className='buttons'>
                            <button className='cancel' onClick={() => {
                            closeModal(false);
                            }}>Cancel</button>
                            <button className='create' onClick={handleCreateClick}>Create</button>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    )
}