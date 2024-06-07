import { ReactNode, createContext, useCallback, useContext, useMemo, useState } from "react";
import { getFoldersByGroupId, getFoldersByUserId, postFolder, updateFolderAPI } from "../api";
import { Folder } from "../model/FolderModel";
import { User } from "../model/userModel";

interface FolderContextType {
    folders: Folder[] | undefined;
    findFoldersByGroupId: (id: string) => Promise<Folder[] | undefined>;
    findFoldersByUserId: (id: string) => Promise<Folder[] | undefined>;
    updateFolder: (id: string, folder:Folder) => Promise<void | undefined>;
    saveFolder: (folder:Folder, profile:boolean, user: User, id?: string) => Promise<void | undefined>;
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

      const updateFolder = useCallback(async (id: string, folder:Folder): Promise<void> => {
        await updateFolderAPI(id, folder);
        
      }, []);

      const saveFolder = useCallback(async (folder:Folder, profile:boolean, user: User, id?: string): Promise<void> => {
        if (id) {
          await postFolder(folder, profile, id);
        }else{
          await postFolder(folder, true, user.id);
        }
        
        
      }, []);


    const value = useMemo(() => ({ folders, findFoldersByGroupId, findFoldersByUserId, updateFolder,saveFolder }), [folders, findFoldersByGroupId, findFoldersByUserId, updateFolder, saveFolder]);

    return (
        <FolderContext.Provider value={value}>
            {children}
        </FolderContext.Provider>
    );
};
