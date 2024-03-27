import ProfileMain from "../components/Profile-main";


interface ProfileProps {
    name: string;
    rank: number;
}

export default function Profile({name,rank} : ProfileProps) {
  
    
    return (
        <>
        <div className="page profile own-profile">
            <ProfileMain />
            <p>{name}</p>
            </div>
        </>
    );

}