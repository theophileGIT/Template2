import { movies } from "@/utils/data";
import Marquee from "react-fast-marquee";

const ImagesMarquee = () => {
    return (
        <div className={"images-marquee"}>
            <Marquee direction="right" autoFill speed="20">
                {movies.map((m,i) => {
                    return (
                        <div className={"movie"} key={i}>
                            <img 
                                src={`/images/movies/${m.imgSrc}`} 
                                alt={m.imgSrc}   
                                className="w-full" 
                            />
                        </div>
                    );
                })}
            </Marquee>
        </div>
    );
};

export default ImagesMarquee;