import React, { createContext, useState, useMemo, useContext, useEffect, ReactNode, useCallback } from 'react';
import { GroupModel } from '../model/GroupModel';
import { getGroupById, postGroup } from '../api';
import { CreateGroupModel } from '../model/CreateGroupModel';
interface GroupContextType {
    group: GroupModel | undefined;
    findGroup: (id: string) => Promise<GroupModel | undefined>;
    postNewGroup: (group: CreateGroupModel) => Promise<string | undefined>;
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

      const postNewGroup = useCallback(async (group: CreateGroupModel): Promise<any | undefined> => {
        try {
            let data = await postGroup(group);
            console.log(data);
            return data.data.id;
         } catch (error) {
           console.error("Error while uploading artwork:", error);
           throw error;
         }
      }, []);

    const value = useMemo(() => ({ group, findGroup, postNewGroup }), [group, findGroup, postNewGroup]);

    return (
        <GroupContext.Provider value={value}>
            {children}
        </GroupContext.Provider>
    );
};
