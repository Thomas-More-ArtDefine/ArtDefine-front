
import List from "../components/List";
import { useItems } from "../context/ItemContext";

export default function ListPage() {
    const { items } = useItems(); 
    
    return (
        <>
            <h1>Dit is een lijst</h1>
           <List items={items} />
        </>
    );
}