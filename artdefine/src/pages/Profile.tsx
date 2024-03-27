
interface ProfileProps {
    name: string;
}

export default function Profile({name} : ProfileProps) {
  
    
    return (
        <>
        <div className="page profile">
            <h1>Profile</h1>
            <p>Welkom op jouw profielpagina</p>
            <p>Je bent ingelogd als {name}</p>
            </div>
        </>
    );

}