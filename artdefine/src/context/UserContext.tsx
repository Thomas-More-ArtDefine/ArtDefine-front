import React, { createContext, useState, useMemo, useContext, useEffect, ReactNode, useCallback } from 'react';
import { User } from '../model/userModel';
import { getBasicUserById, getUserById } from '../api';


interface UserContextType {
    user: User | undefined;
    findUserById: (id: string) => Promise<User | undefined>;
    findBasicUserById: (id: string) => Promise<User | undefined>;
}

export const UserContext = createContext<UserContextType | null>(null);

export const useUser = () => useContext(UserContext)!;

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User>();

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

      const findBasicUserById = useCallback(async (id: string): Promise<User | undefined> => {
        const fetchData = async (id:string) => {
          const data = await getBasicUserById(id);
          return data;
        };
        const response = await fetchData(id);
        setUser(response);
        return response;
      }, []);

    const value = useMemo(() => ({ user, findUserById, findBasicUserById }), [user, findUserById, findBasicUserById]);

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};