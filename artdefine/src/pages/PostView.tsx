import ArtworkInfo from "../components/artwork/ArtworkInfo";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ArtworkContext } from "../context/ArtworkContext";
import { Artwork } from "../model/PostModel";
import ArtworkContainer from "../components/artwork/Artwork";

export default function PostView() {
  const { id } = useParams<{ id: string }>();
  const { findArtwork } = useContext(ArtworkContext) || {};
  const [artwork, setArtwork] = useState<Artwork | undefined>(undefined);
  

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
      <div className="page post-view-page">
        {artwork ? (
        <>
            <ArtworkContainer src={artwork?.post_content} />
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
}
