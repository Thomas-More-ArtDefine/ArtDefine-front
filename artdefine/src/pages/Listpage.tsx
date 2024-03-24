
import List from "../components/List";
import { useItems } from "../context/ItemContext";

export default function ListPage() {
    const { items } = useItems(); 
    
    return (
        <>
            <h1>Dit is een lijst</h1>
           <List items={items} />
           <button>Toevoegen</button>
           <button className="pirmary">Toevoegen</button>
           <button className="secondary">Toevoegen</button>
           <button className="has-icon">Toevoegen <i className="material-icons">add</i></button>
           <div className="link"> <a href="http://">link</a></div>
        </>
    );
}