import Banner from "../bannerAndProfileImage/Banner";
import mockBannerPic from "../../assets/images/mock-banner-pic.png";
import mockprofilePic from "../../assets/images/mock-profile-pic.png";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { User } from "../../model/userModel";

const ProfileMain: React.FC<{ 
  rank: number, 
  profileActive:boolean,
  galleryActive:boolean, 
  groupsActive:boolean, 
  bannerImg?:string,
  profileImg?:string
  handleCategoryButtonClick:any}> = ({ rank, profileActive, galleryActive, groupsActive, handleCategoryButtonClick, bannerImg, profileImg}) => {
    const { id } = useParams<{ id: string }>();
    const loggedUserId = '1';
    const { findFollowing,updateFollowing, following } = useContext(UserContext) || {};

    useEffect(() => {
      const fetchFolders = async () => {
          if (findFollowing && loggedUserId) {
            await findFollowing(loggedUserId ?? "");
          }
        };
  
      fetchFolders();
    }, [loggedUserId, findFollowing]);

    const arrayContains = (array:User[], id:string) => {
      let set = false;
      array.forEach((user)=>{
        if (user.id.toString() === id) {
          set = true;
        }
      })
      return set;
    }

    const handleFollowClick = async ()=>{
      console.log('add user '+id+' to following list of user '+loggedUserId);
      if (id && updateFollowing && loggedUserId) {
        let array: User[] = [];
        
        if (following) {
          array = following;
        }
        array.push({id: id, user_name: "",
        user_subtitle: "",
        user_bio: "",
        user_pronouns: '',
        user_banner_picture: '',
        user_profile_picture: "",
        user_deactivated: false,
        user_deactivation_date: "",
        user_creationdate: '',
        links:[],
        folders: []})
        console.log(array);
        await updateFollowing(loggedUserId, array);
        window.location.reload();
      }
      
    }

    const handleUnfollowClick = async ()=>{
      console.log('add user '+id+' to following list of user '+loggedUserId);
      if (id && updateFollowing && loggedUserId) {
        let array: User[] = [];
        let index =0;
        if (following) {
          array = following;
        }
        array.forEach((user)=>{
          if (user.id.toString()===id) {
            array.splice(index,1);
          }else{
            index++;
          }
        })
        await updateFollowing(loggedUserId, array);
        window.location.reload();
    }
  }

  return (
    <div className="profile-main">
      <Banner imageUrl={bannerImg? bannerImg: mockBannerPic} imageAlt="Banner Picture" />

      <div className="profile-btns">
        {rank === 0 ? (<div></div>) : (<button>Message</button> )}
        <div className="flex justify-center"><img src={profileImg? profileImg: mockprofilePic} alt="Profile Picture" /></div>
        {rank === 0 ? (<div></div>) : (following && id && arrayContains(following, id)?<button onClick={() => handleUnfollowClick()}>Unfollow</button>:<button onClick={() => handleFollowClick()}>Follow</button>)}
        
        
      </div>
      <div className='feed-btns profile'>
                <div className='subnav-button'>
                    <button className={((profileActive) ? "active": "")} onClick={() => handleCategoryButtonClick("profile")}><i className="material-icons">person</i></button>
                    <div className='button-text'>Profile</div>
                </div>
                <div className='subnav-button'>
                    <button className={((galleryActive) ? "active": "")} onClick={() => handleCategoryButtonClick("gallery")}><i className="material-icons">collections</i></button>
                    <div className='button-text'>Gallery</div>
                </div>
                <div className='subnav-button'>
                    <button className={((groupsActive) ? "active": "")} onClick={() => handleCategoryButtonClick("groups")}><i className="material-icons">group</i></button>
                    <div className='button-text'>Groups</div>
                </div>            
        </div>
    </div>
  );
};

export default ProfileMain;
// Path: artdefine/src/components/Profile-main.tsx
