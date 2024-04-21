

const ArtworkContainer: React.FC<{src:string}> = ({src}) => {
    return (
        <div className="artwork">
           <div className="content"><img src={src} alt="" /></div> 
        </div>
    )
}





export default ArtworkContainer;