import "./HomePage.css"
import image from "./1.png"
import 'animate.css';
import SearchIcon from '@mui/icons-material/Search';
import TrendingCars from "../TrendingCars/TrendingCars";
import ExploreTown from "../ExploreTown/ExploreTown";
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from "react";

function HomePage() {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <div className="HomePage">
            <div className="HeroSection">
                <div className="SmallHeader " data-aos='fade-up'>
                    Meet your new car
                </div>
                <div className="BigHeader " data-aos='fade-up'>
                    honda civic type r
                </div>
                <div className="OptionBtn">
                    <button data-aos='fade-right' >More Details</button>
                    <button data-aos='fade-left' >Test Drive</button>
                </div>
                <div className="Image " data-aos='fade-down'>
                    <img src={image} alt="" />
                </div>

                <div className="QuerySection">
                    <div className="Question" data-aos='fade-up' >Which Vechile are you looking for?</div>
                    <div className="SearchBar">
                        <input data-aos='fade-up' type="text" placeholder="Type" />
                        <input data-aos='fade-up' type="text" placeholder="Year" />
                        <input data-aos='fade-up' type="text" placeholder="Model" />
                        <input data-aos='fade-up' type="text" placeholder="Price" />
                        <div data-aos='fade-up' className="Search">
                            <SearchIcon />
                            Search
                        </div>
                    </div>
                </div>
                <TrendingCars />
                <ExploreTown />
                <TrendingCars />
            </div>
        </div>
    )
}

export default HomePage
