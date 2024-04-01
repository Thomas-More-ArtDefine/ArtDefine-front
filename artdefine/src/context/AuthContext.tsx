import React, { createContext, useState, useMemo, useContext, useEffect, ReactNode } from 'react';
import { getAllUsers } from '../api';
import { userOutput } from '../model/userOutput';


interface AuthContextType {
    users: userOutput[];
    user: userOutput | null;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => useContext(AuthContext)!;

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [users, setUsers] = useState<userOutput[]>([]);
    const [user, setUser] = useState<userOutput | null>(null);

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
