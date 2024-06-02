import ArtworkInfo from "../../components/artwork/ArtworkInfo";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ArtworkContext } from "../../context/ArtworkContext";
import { Artwork } from "../../model/PostModel";
import ArtworkContainer from "../../components/artwork/Artwork";

export default function PostView() {
  const { id } = useParams<{ id: string }>();
  const { findArtwork } = useContext(ArtworkContext) || {};
  const [artwork, setArtwork] = useState<Artwork | undefined>(undefined);
  const navigate = useNavigate();

  // Fetch artwork data when the component mounts or when the id or findArtwork function changes
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
      <div className="return-link">
      <div
          className="eaves book font fs20 align-left flex align-center clickable"
          onClick={() => navigate("/post/" + id)}
        >
          <i className="material-icons">chevron_left</i>Return to post
        </div></div>
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
