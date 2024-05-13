import { ReactNode, createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { User } from "../model/userModel";
import { getFollowers, getFollowing } from "../api";

interface ProfileContextType {
    followers: User[] | undefined;
    following: User[] | undefined;
    findFollowers: (id: string) => Promise<User[] | undefined>;
    findFollowing: (id: string) => Promise<User[] | undefined>;
}

export const ProfileContext = createContext<ProfileContextType | null>(null);

export const useGroups = () => useContext(ProfileContext)!;

export const ProfileProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [followers, setFollowers] = useState<User[]>([]);
    const [following, setFollowing] = useState<User[]>([]);

    useEffect(() => {
    }, []);

    const findFollowers = useCallback(async (id: string): Promise<User[] | undefined> => {
        const fetchData = async (id:string) => {
          const data = await getFollowers(id);
          return data;
        };
        const response = await fetchData(id);
        setFollowers(response);
        return response;
      }, []);

      const findFollowing = useCallback(async (id: string): Promise<User[] | undefined> => {
        const fetchData = async (id:string) => {
          const data = await getFollowing(id);
          return data;
        };
        const response = await fetchData(id);
        setFollowing(response);
        return response;
      }, []);

      
    const value = useMemo(() => ({ followers, following, findFollowers, findFollowing }), [followers, following, findFollowers, findFollowing]);

    return (
        <ProfileContext.Provider value={value}>
            {children}
        </ProfileContext.Provider>
    );
};
