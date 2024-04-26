import React, { createContext, useState, useMemo, useContext, useEffect, ReactNode, useCallback } from 'react';
import { getGroupsByUserId } from '../api';
import { GroupModel } from '../model/GroupModel';


interface GroupsContextType {
    groups: GroupModel[];
    findUsersGroups: (id: string) => Promise<GroupModel[] | undefined>;
}

export const GroupsContext = createContext<GroupsContextType | null>(null);

export const useGroups = () => useContext(GroupsContext)!;

export const GroupsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [groups, setGroups] = useState<GroupModel[]>([]);

    useEffect(() => {
        //console.log("groups: ", groups);
        
    }, [groups]);

    const findUsersGroups = useCallback(async (id: string): Promise<GroupModel[] | undefined> => {
        const fetchData = async (id:string) => {
          const data = await getGroupsByUserId(id);
          return data;
        };
        const response = await fetchData(id);
        setGroups(response);
        return response;
      }, []);

    const value = useMemo(() => ({ groups, findUsersGroups }), [groups, findUsersGroups]);

    return (
        <GroupsContext.Provider value={value}>
            {children}
        </GroupsContext.Provider>
    );
};