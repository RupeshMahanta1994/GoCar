import TrendingCarsCards from "../TrendingCarsCards/TrendingCarsCards";
import "./TrendingCars.css"
import { KeyboardBackspace, East } from '@mui/icons-material';
import AOS from 'aos'
import "aos/dist/aos.css"
import { useEffect } from "react";

function TrendingCars() {
    useEffect(() => {
        AOS.init();
    })
    return (
        <div className="TrendigCars">
            <div className="HeaderSection" data-aos='fade-up'>
                <div className="HeaderSectionText" >
                    trending near you
                </div>
                <div className="HeaderSectionBtn">
                    <div className="LeftBtn ArrowBtn">
                        <KeyboardBackspace />
                    </div>
                    <div className="RightBtn ArrowBtn">
                        <East />
                    </div>
                </div>
            </div>
            <div className="TrendingCarsCard" data-aos='fade-up'>
                <TrendingCarsCards />
                <TrendingCarsCards />
                <TrendingCarsCards />
                <TrendingCarsCards />
                <TrendingCarsCards />
                <TrendingCarsCards />
            </div>
        </div>
    )
}

export default TrendingCars
