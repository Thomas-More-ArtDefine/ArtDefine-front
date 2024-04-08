import TextCard from "../TextCard";

const GroupHome = ({title, text, creationDate, links, owner} : {title:string, text:string, creationDate: string, links: string[], owner:string}) => {
    return (
        <>
        <TextCard title={title}  text={text} creationDate={creationDate} links={links} owner={owner} />
        </>
    );
    }

export default GroupHome;