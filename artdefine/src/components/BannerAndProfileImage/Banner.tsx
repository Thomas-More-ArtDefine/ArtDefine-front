import { ReactComponent as ArrowIcon } from "../../assets/Vectors/arrow-down-yellow.svg";
import { ReactComponent as DotsIcon } from "../../assets/Vectors/dots-yellow.svg";

interface BannerProps {
  imageUrl: string;
  imageAlt: string;
}

const Banner = ({ imageUrl: src, imageAlt: alt }: BannerProps) => {

    const handleDotsClick = (): void => {
    window.location.href = "profile/editBanner";
    }

  return (
    <div className="banner">
      <img src={src} alt={alt} />
      <div className="collapse">
        <ArrowIcon />
      </div>
      <div className="dots" onClick={handleDotsClick}>
        <DotsIcon />
      </div>
    </div>
  );
};
export default Banner;
// Path: artdefine/src/components/Banner.tsx
