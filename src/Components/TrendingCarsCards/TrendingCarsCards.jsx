import "./TrendingCarsCards.css"
import car from "./1.png"
import styled from "styled-components"

function TrendingCarsCards({ color }) {

    return (
        <>
            <div className="TrendingCarsCards" >
                <div className="CardImage">
                    <img src={car} alt="" />
                </div>
                <div className="CardTitle">
                    used 2019 audi s4 premium plus
                </div>
                <div className="CardMilage">
                    11457 miles
                </div>
                <div className="CardEngine">
                    AWD 4-cylinder turbo
                </div>
                <div className="CardPrice">
                    <div className="PriceBtn Btn">
                        $41,200
                    </div>
                    <div className="BestSeller Btn">
                        best seller
                    </div>
                </div>
            </div>

        </>
    )
}

export default TrendingCarsCards
