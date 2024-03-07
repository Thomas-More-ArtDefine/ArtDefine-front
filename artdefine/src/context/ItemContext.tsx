import React, { createContext, useState, useMemo, useContext, useEffect, ReactNode } from 'react';
import { getAll2 } from '../api';

interface Item {
    key: string;
    text: string;
}

interface ItemsContextType {
    items: Item[];
}

export const ItemContext = createContext<ItemsContextType | null>(null);

export const useItems = () => useContext(ItemContext)!;

export const ItemsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [items, setItems] = useState<Item[]>([{ key: "asdf", text: "test" }]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAll2();
            console.log(data);
            setItems(data);
        };

        fetchData();
    }, []);

    const value = useMemo(() => ({ items }), [items]);

    return (
        <ItemContext.Provider value={value}>
            {children}
        </ItemContext.Provider>
    );
};
