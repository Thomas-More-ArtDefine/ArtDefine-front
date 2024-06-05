
import React from "react";
import { Artwork } from "../../model/PostModel";

const DetailFormForPost: React.FC<{
  artwork: Artwork;
  setArtwork: (value: Artwork) => void;
  setNameChanged: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({
  artwork,
  setArtwork,
  setNameChanged
}) => {
  
  return (
    <div className="form">
      <form>
        <div className="form-item">
          <label htmlFor="title" className="input-title">Title*</label>
          <input
            type="text"
            id="title"
            value={artwork.post_title}
            onChange={(e) =>{
              setArtwork({
                ...artwork,
                post_title: e.target.value,
              });
            if (e.target.value && e.target.value !== '') {
              setNameChanged(true);
            }else{
              setNameChanged(false);
            }}
            }
          />
        </div>

        <div className="form-item">
          {" "}
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={artwork.post_description}
            rows={5}
            onChange={(e) =>
              setArtwork({
                ...artwork,
                post_description: e.target.value,
              })
            }
          ></textarea>
        </div>

        <div className="form-item">
          {" "}
          <label htmlFor="medium">Medium</label>
          <input
            type="text"
            id="medium"
            value={artwork.post_medium}
            onChange={(e) =>
              setArtwork({
                ...artwork,
                post_medium: e.target.value,
              })
            }
          />
        </div>

      </form>
    </div>
  );
};

export default DetailFormForPost;
