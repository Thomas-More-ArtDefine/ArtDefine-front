import { useContext, useEffect } from "react";
import { GroupModel } from "../../model/GroupModel";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";

const GroupDetails: React.FC<{group:GroupModel}> = ({group} ) => {
    const { findUserById, user } = useContext(UserContext) || {};

    useEffect(() => {
        const fetchUser = async () => {
          if (findUserById) {
            await findUserById(group.creator_id ?? "");
          }
        };
    
        fetchUser();
        console.log(user);
      }, [group.creator_id, findUserById]);

      console.log(group.creator_id)

    return (
        <>
            <div className="group-details detail-card">
                <div className="card-title">Group Details</div>
                <div className="content">
                    <table>
                        <tbody>
                            <tr>
                                <td className="table-title">Creator:</td>
                                <td><Link to={"/user/"+group.creator_id.toString()}>{user?.user_name}</Link></td>
                            </tr>
                            <tr>
                                <td className="table-title">Created on:</td>
                                <td>{group.group_creationdate}</td>
                            </tr>  
                            {/* <tr>
                                <td>Owners</td>
                                <td><ul>TODO</ul></td>
                            </tr>   */}
                            <tr>
                                <td className="table-title">Member count:</td>
                                <td>
                                    <span className="userlimit">
                                        <span className="members">{group.members.length}</span>
                                        / 
                                        <span className="limit">{group.group_userlimit}</span>
                                    </span>
                                </td>
                            </tr>  
                            <tr>
                                <td className="table-title">Visibility:</td>
                                <td>{group.group_setting_visibility}</td>
                            </tr> 
                            <tr>
                                <td className="table-title">Join Setting:</td>
                                <td>{group.group_setting_join}</td>
                            </tr> 
                        </tbody>
                        
                        
                    </table>
                </div>
            </div>
        </>
    );
    }

export default GroupDetails;