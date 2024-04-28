import React, { createContext, useState, useMemo, useContext, useEffect, ReactNode, useCallback } from 'react';
import { getGroupsByName, getGroupsByUserId } from '../api';
import { GroupModel } from '../model/GroupModel';


interface GroupsContextType {
    joinedGroups: GroupModel[];
    foundGroups: GroupModel[];
    findUsersGroups: (id: string) => Promise<GroupModel[] | undefined>;
    findGroupsByName: (query: string) => Promise<GroupModel[] | undefined>;
    setFoundGroups: (value: GroupModel[]) => void;
}

export const GroupsContext = createContext<GroupsContextType | null>(null);

export const useGroups = () => useContext(GroupsContext)!;

export const GroupsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [joinedGroups, setJoinedGroups] = useState<GroupModel[]>([]);
    const [foundGroups, setFoundGroups] = useState<GroupModel[]>([]);

    useEffect(() => {
        //console.log("groups: ", groups);
        
    }, [joinedGroups]);

    const findUsersGroups = useCallback(async (id: string): Promise<GroupModel[] | undefined> => {
        const fetchData = async (id:string) => {
          const data = await getGroupsByUserId(id);
          return data;
        };
        const response = await fetchData(id);
        setJoinedGroups(response);
        return response;
      }, []);

    const findGroupsByName = useCallback(async (query: string): Promise<GroupModel[] | undefined> => {
        const fetchData = async (query: string) => {
            if (query !== '') {
                const data = await getGroupsByName(query, 10, 0, 'desc');
                return data[0]; // data[1] = total count
            }else{
                return [];
            }
          
        };
        const response = await fetchData(query);
        setFoundGroups(response);
        return response;
    }, []);



    const value = useMemo(() => ({ joinedGroups, foundGroups, findUsersGroups, findGroupsByName, setFoundGroups }), [joinedGroups, foundGroups, findUsersGroups, findGroupsByName, setFoundGroups]);

    return (
        <GroupsContext.Provider value={value}>
            {children}
        </GroupsContext.Provider>
    );
};