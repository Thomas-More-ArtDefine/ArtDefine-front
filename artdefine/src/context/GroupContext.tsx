import React, { createContext, useState, useMemo, useContext, useEffect, ReactNode, useCallback } from 'react';
import { GroupModel } from '../model/GroupModel';
import { getGroupById } from '../api';
interface GroupContextType {
    group: GroupModel | undefined;
    findGroup: (id: string) => Promise<GroupModel | undefined>;
}

export const GroupContext = createContext<GroupContextType | null>(null);

export const useGroups = () => useContext(GroupContext)!;

export const GroupProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [group, setGroup] = useState<GroupModel>();

    useEffect(() => {
    }, [group]);

    const findGroup = useCallback(async (id: string): Promise<GroupModel | undefined> => {
        const fetchData = async (id:string) => {
          const data = await getGroupById(id);
          return data;
        };
        const response = await fetchData(id);
        setGroup(response);
        return response;
      }, []);

    const value = useMemo(() => ({ group, findGroup }), [group, findGroup]);

    return (
        <GroupContext.Provider value={value}>
            {children}
        </GroupContext.Provider>
    );
};
