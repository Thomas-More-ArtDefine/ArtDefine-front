import { ReactComponent as ArrowIcon } from "../../assets/vectors/arrow-down-yellow.svg";
import { ReactComponent as DotsIcon } from "../../assets/vectors/dots-yellow.svg";

interface BannerProps {
  imageUrl: string;
  imageAlt: string;
}

const Banner: React.FC<BannerProps> = ({ imageUrl: src, imageAlt: alt }) => {

    const handleDotsClick = (): void => {
    window.location.href = "profile/editBanner";
    }

  return (
    <div className="banner">
      <img src={src} alt={alt} />
      {/* <div className="collapse">
        <ArrowIcon />
      </div> */}
      <div className="dots" onClick={handleDotsClick}>
        <DotsIcon />
      </div>
    </div>
  );
};
export default Banner;
// Path: artdefine/src/components/Banner.tsx
