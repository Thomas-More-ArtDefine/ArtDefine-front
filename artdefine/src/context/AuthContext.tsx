import React, { createContext, useState, useMemo, useContext, useEffect, ReactNode } from 'react';
import { getAllUsers } from '../api';
import { User } from '../model/userModel';


interface AuthContextType {
    users: User[];
    user: User | null;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => useContext(AuthContext)!;

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [users, setUsers] = useState<User[]>([]);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllUsers();
            console.log(data);
            setUsers(data);
        };

        fetchData();
        setUser(users[0]);
    }, []);

    const value = useMemo(() => ({ users, user }), [users, user]);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
