import { ReactNode, createContext, useCallback, useContext, useMemo, useState } from "react";
import { getFoldersByGroupId, getFoldersByUserId } from "../api";
import { Folder } from "../model/FolderModel";

interface FolderContextType {
    folders: Folder[] | undefined;
    findFoldersByGroupId: (id: string) => Promise<Folder[] | undefined>;
    findFoldersByUserId: (id: string) => Promise<Folder[] | undefined>;
}

export const FolderContext = createContext<FolderContextType | null>(null);

export const useGroups = () => useContext(FolderContext)!;

export const FolderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [folders, setFolders] = useState<Folder[]>();

    const findFoldersByGroupId = useCallback(async (id: string): Promise<Folder[] | undefined> => {
        const fetchData = async (id:string) => {
          const data = await getFoldersByGroupId(id);
          return data;
        };
        const response = await fetchData(id);
        setFolders(response);
        return response;
      }, []);

      const findFoldersByUserId = useCallback(async (id: string): Promise<Folder[] | undefined> => {
        const fetchData = async (id:string) => {
          const data = await getFoldersByUserId(id);
          return data;
        };
        const response = await fetchData(id);
        setFolders(response);
        return response;
      }, []);


    const value = useMemo(() => ({ folders, findFoldersByGroupId, findFoldersByUserId }), [folders, findFoldersByGroupId, findFoldersByUserId]);

    return (
        <FolderContext.Provider value={value}>
            {children}
        </FolderContext.Provider>
    );
};