import "./TrendingCarsCards.css"
import car from "./1.png"
import styled from "styled-components"

const TrendingCarsCards1 = styled.div`
text-transform: capitalize;
    margin-bottom: 2em;
    padding: 1.5em;
    border-radius: 0.4rem;
    transition: all 0.2s ease-in-out;

&:hover{
    transform: translateY(-8px);
    background: rgb(203, 203, 233);
}    


& img {
    width: 18rem;
    margin-bottom: 0.6em;
}
& p:first-child {
    font-weight: bold;
}

& p:nth-child(2){
    font-size: 0.8rem;
    margin-top: 0.3em;
}

@media only screen and (max-width: 480p) {
    
}


`



function TrendingCarsCards() {

    return (
        <>
            <TrendingCarsCards1  >
                <img src={car} alt="" />
                <p>
                    used 2019 audi s4 premium plus
                </p>
                <p>
                    11457 miles
                </p>

                <div className="CardPrice">
                    <div className="PriceBtn Btn">
                        $41,200
                    </div>
                    <div className="BestSeller Btn">
                        best seller
                    </div>
                </div>
            </TrendingCarsCards1>

        </>
    )
}

export default TrendingCarsCards
