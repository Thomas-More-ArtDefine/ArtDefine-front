import React, { useState } from "react";
import GroupCard from "../cards/GroupCard";
import { GroupModel } from "../../model/GroupModel";
import placeholderpfp from "../../assets/images/mock-profile-pic.png";

interface Props {
  userGroups: GroupModel[];
}

const GroupsForPost: React.FC<Props> = ({ userGroups }) => {
  const [selectedGroups, setSelectedGroups] = useState<number[]>([]);
  const handleGroupSelection = (groupId: number) => {
    if (selectedGroups.includes(groupId)) {
      setSelectedGroups(selectedGroups.filter((id) => id !== groupId));
    } else {
      setSelectedGroups([...selectedGroups, groupId]);
    }
  };

  return (
    <div>
      {userGroups.map((group) => {
        const image =
          group.group_profile_picture !== null &&
          group.group_profile_picture !== undefined &&
          group.group_profile_picture !== "" ? (
            <img src={group.group_profile_picture} alt="" className="gpfp" />
          ) : (
            <img src={placeholderpfp} alt="" className="gpfp" />
          );

        return (
          <div>
            <div className="group-card">
              {image}
              <div className="group-info">
                <div className="general">
                  <span className="group-name">{group.group_name}</span>
                  <span className="userlimit">
                    <span className="members">{group.members.length}</span>/
                    <span className="limit">{group.group_userlimit}</span>
                  </span>
                </div>

                <div className="description">{group.group_bio}</div>
              </div>
            </div>
            <div className="group-folders"></div>
          </div>
        );
      })}
      <div>
        <label htmlFor="own-profile" className="checkbox">
          <input
            type="checkbox"
            id="own-profile"
            checked={selectedGroups.length === 0}
            onChange={() => setSelectedGroups([])}
          />
          <div className="text">My Profile</div>
        </label>
      </div>
    </div>
  );
};

export default GroupsForPost;
