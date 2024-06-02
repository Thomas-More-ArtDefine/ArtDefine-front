import React, { createContext, useState, useMemo, useContext, useEffect, ReactNode, useCallback } from 'react';
import { User } from '../model/userModel';
import { getBasicUserById, getFollowing, getUserById, getUsersByName, postFollowing } from '../api';


interface UserContextType {
    user: User | undefined;
    users: User[] | undefined;
    following: User[] | undefined;
    findUserById: (id: string) => Promise<User | undefined>;
    findBasicUserById: (id: string) => Promise<User | undefined>;
    findFollowing: (id: string) => Promise<User[] | undefined>;
    updateFollowing: (loggedUserId: string, following:User[]) => Promise<void>;
    findUsersByUsername: (name: string) => Promise<User[] | undefined>;
}

export const UserContext = createContext<UserContextType | null>(null);

export const useUser = () => useContext(UserContext)!;

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User>();
    const [users, setUsers] = useState<User[]>();
    const [following, setFollowing] = useState<User[]>();

    useEffect(() => {}, []);

    const findUserById = useCallback(async (id: string): Promise<User | undefined> => {
        const fetchData = async (id:string) => {
          const data = await getUserById(id);
          return data;
        };
        const response = await fetchData(id);
        setUser(response);
        return response;
      }, []);

      const findUsersByUsername = useCallback(async (id: string): Promise<User[] | undefined> => {
        const fetchData = async (name:string) => {
          if (name) {
            const data = await getUsersByName(name, 10, 0, 'desc');
          return data[0];
          }else{
            return [];
          }
          
        };
        const response = await fetchData(id);
        setUsers(response);
        return response;
      }, []);

      const findBasicUserById = useCallback(async (id: string): Promise<User | undefined> => {
        const fetchData = async (id:string) => {
          const data = await getBasicUserById(id);
          return data;
        };
        const response = await fetchData(id);
        setUser(response);
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

      const updateFollowing = useCallback(async (loggedUserId: string, followed: User[]): Promise<void> => {
        const fetchData = async (id:string) => {
          const data = await postFollowing(id, followed);
          return data;
        };
        const response = await fetchData(loggedUserId);
        return response;
      }, []);

    const value = useMemo(() => ({ user, users, following, findUserById, findBasicUserById,findFollowing, updateFollowing, findUsersByUsername }), [user, users, following, findUserById, findBasicUserById,findFollowing, updateFollowing, findUsersByUsername]);

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};