import React, { createContext, useState, useMemo, useContext, useEffect, ReactNode } from 'react';
import { getAllUsers, getGroupsByUserId, getUserById } from '../api';
import { User } from '../model/userModel';
import { GroupModel } from '../model/GroupModel';


interface AuthContextType {
    users: User[];
    user: User | null;
    joinedGroups: GroupModel[];
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => useContext(AuthContext)!;

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [users, setUsers] = useState<User[]>([]);
    const [user, setUser] = useState<User | null>(null);
    const [joinedGroups, setJoinedGroups] = useState<GroupModel[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const usersData = await getAllUsers();
            const userData = await getUserById(usersData[0].id);
            console.log("Users in Context:",userData);
            setUser(userData);
            if (user) {
                const joinedGroupsData = await getGroupsByUserId(user.id);
                setJoinedGroups(joinedGroupsData);
            }
            
        };

        fetchData();
    }, []);

    const value = useMemo(() => ({ users, user, joinedGroups }), [users, user, joinedGroups]);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
