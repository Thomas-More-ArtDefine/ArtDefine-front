import { ReactComponent as ArrowIcon } from "../../assets/vectors/arrow-down-yellow.svg";
import { ReactComponent as DotsIcon } from "../../assets/vectors/dots-yellow.svg";

const GroupBanner = ({
  name,
  bannerUrl: src,
  alt,
}: {
  name: string;
  bannerUrl: string;
  alt: string;
}) => {
  const handleDotsClick = (): void => {
    window.location.href = "";
  };

  return (
    <div className="group-banner"><div className=" banner">
      <img src={src} alt={alt} />
      <div className="collapse">
        <ArrowIcon />
      </div>
     
    </div>
    <div className="name-container">
      <div className="group-name">
        {name}{" "}
        </div>
        <div className="dots" onClick={handleDotsClick}>
          <DotsIcon />
        </div>
      </div></div>
  );
};

export default GroupBanner;
