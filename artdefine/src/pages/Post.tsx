import ArtworkInfo from "../components/artwork/ArtworkInfo";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ArtworkContext } from "../context/ArtworkContext";
import { Artwork } from "../model/PostModel";
import ArtworkContainer from "../components/artwork/Artwork";

export default function Post() {
  const { id } = useParams<{ id: string }>();
  const { findArtwork } = useContext(ArtworkContext) || {};
  const [artwork, setArtwork] = useState<Artwork | undefined>(undefined);
  

  // Fetch the artwork data when the component mounts or when the 'id' or 'findArtwork' value changes
  useEffect(() => {
    const fetchArtwork = async () => {
      if (findArtwork) {
        const artwork = await findArtwork(id ?? "");
        console.log(artwork);
        setArtwork(artwork);
      }
    };

    fetchArtwork();
  }, [id, findArtwork]);

  const handleClick = () => {
    if (artwork) {
      window.location.href = `/post/${id}/view`;
    } 
  }

  return (
    <>
      <div className="page artwork-page">
        {artwork ? (
          <>
          <div className="clickable" onClick={handleClick}>
            
            <ArtworkContainer src={artwork?.post_content} />
            </div>
            <div className="artwork-info"><ArtworkInfo title={artwork.post_title} user={artwork.user} description={artwork.post_description} folders={artwork.folders} /></div>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
}
