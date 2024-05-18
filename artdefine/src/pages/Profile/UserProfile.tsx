import { useContext, useEffect } from "react";
import Profile from "../../components/profile/Profile";
import { useAuth } from "../../context/AuthContext";

import { useParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext";



export default function UserProfile() {
    const { id } = useParams<{ id: string }>();
    const {user} = useAuth();
    const { findUserById, user:founduser } = useContext(UserContext) || {};

    useEffect(() => {
        const fetchUser = async () => {
          if (findUserById && id) {
            findUserById(id);
          }
        };
        fetchUser();
    }, [id, findUserById]);
  

    return (
        <>
            <Profile user={id&&user? founduser :user} />
        </>
    );

}