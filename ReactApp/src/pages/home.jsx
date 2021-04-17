import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import getRecipeById from "../data";

const Home = () => {
    return (
        <div>
            <Carousel showArrows={true}>
                <div>
                    <img className="carousel-image" src={getRecipeById(1).image} />
                </div>
                <div>
                    <img className="carousel-image" src={getRecipeById(2).image} />
                </div>
                <div>
                    <img className="carousel-image" src={getRecipeById(3).image} />
                </div>
            </Carousel>
        </div>
    )
}

export default Home 
