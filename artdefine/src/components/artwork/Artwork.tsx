


const ArtworkContainer = ({src}: {src:string}) => {
    return (
        <div className="artwork">
           <div className="content"><img src={src} alt="" /></div> 
        </div>
    )
}





export default ArtworkContainer;