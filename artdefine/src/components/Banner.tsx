
import { ReactComponent as ArrowIcon } from '../assets/Vectors/arrow-down-yellow.svg';

interface BannerProps {
    imageUrl: string;
    imageAlt: string;
}

const Banner = ({ imageUrl: src, imageAlt: alt }: BannerProps) => {
    return (
        <div className="banner">
            <img src={src} alt={alt} />
            <div className="collapse">
                <ArrowIcon />
            </div>
        </div>
    );
}

export default Banner;
// Path: artdefine/src/components/Banner.tsx