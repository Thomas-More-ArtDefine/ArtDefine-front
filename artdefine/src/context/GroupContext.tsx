import React, { createContext, useState, useMemo, useContext, useEffect, ReactNode, useCallback } from 'react';
import { GroupModel } from '../model/GroupModel';
import { getGroupById, postGroup, postGroupMember } from '../api';
import { CreateGroupModel } from '../model/CreateGroupModel';
import { User } from '../model/userModel';
interface GroupContextType {
    group: GroupModel | undefined;
    findGroup: (id: string) => Promise<GroupModel | undefined>;
    postNewGroup: (group: CreateGroupModel) => Promise<string | undefined>;
    joinGroup: (group:GroupModel, user:User) => Promise<void | undefined>;
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

      const joinGroup = useCallback(async (group:GroupModel, user:User): Promise<void | undefined> => {
        const postData = async (group:GroupModel, user:User) => {
          const data = await postGroupMember(group, user);
          return data;
        };
        await postData(group, user);
      }, []);

      const postNewGroup = useCallback(async (group: CreateGroupModel): Promise<any | undefined> => {
        try {
            let data = await postGroup(group);
            return data.data.id;
         } catch (error) {
           console.error("Error while uploading artwork:", error);
           throw error;
         }
      }, []);

    const value = useMemo(() => ({ group, findGroup, postNewGroup, joinGroup }), [group, findGroup, postNewGroup, joinGroup]);

    return (
        <GroupContext.Provider value={value}>
            {children}
        </GroupContext.Provider>
    );
};
