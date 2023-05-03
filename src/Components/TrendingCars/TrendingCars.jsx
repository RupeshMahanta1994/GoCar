import TrendingCarsCards from "../TrendingCarsCards/TrendingCarsCards";
import "./TrendingCars.css"
import { KeyboardBackspace, East } from '@mui/icons-material';
import AOS from 'aos'
import "aos/dist/aos.css"
import { useEffect } from "react";
import styled from "styled-components";


const TrendigCars = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 8em;

    @media only screen and (max-width: 480p){
        padding: 0;
        background-color: red;

    }
`
const HeaderSectionBtn = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const TrendingCarsCard = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;

    margin: 5em 0;
    @media only screen and (max-width: 480p){
        width: 100%;
        height: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0;
        background: red;
    }


    
`

function TrendingCars() {
    useEffect(() => {
        AOS.init();
    })
    return (
        <TrendigCars >
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
            <TrendingCarsCard data-aos='fade-up'>
                <TrendingCarsCards />
                <TrendingCarsCards />
                <TrendingCarsCards />
                <TrendingCarsCards />
                <TrendingCarsCards />
                <TrendingCarsCards />
            </TrendingCarsCard>
        </TrendigCars>
    )
}

export default TrendingCars
