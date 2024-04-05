
import List from "../components/List";

import { useAuth } from "../context/AuthContext";
import { useItems } from "../context/ItemContext";

export default function ListPage() {
    const { items } = useItems(); 
    const { users } = useAuth();
    
    
    return (
        <>
            <h1>Dit is een lijst</h1>
           <List items={items} />
           <button className="primary">Toevoegen</button>
           <button className="primary">Toevoegen</button>
           <button className="secondary">Toevoegen</button>
           <button className="has-icon">Toevoegen <i className="material-icons">add</i></button>
           <div className="link"> <a href="http://">link</a></div>

           <div>
            <div>Gebruikers:</div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.user_name}</li>
                ))}
            </ul>
           </div>
        </>
    );
}