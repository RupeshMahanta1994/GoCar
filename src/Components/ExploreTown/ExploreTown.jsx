import "./ExploreTown.css"
import toyota from "./toyota.png"
import mercedez from "./mercedez.png"
import volks from "./volks.png"
import hyundai from "./hyundai.png"

function ExploreTown() {
    return (
        <>
            <div className="ExploreTown">
                <div className="Header">
                    Explore top sellers in town
                </div>
                <div className="Tagline">
                    Joseph Samuel Girard holds
                    the Guinness World Record
                    for being the greatest salesman
                    in the world.
                </div>
                <div className="Brands">
                    <div className="Brand">
                        <div className="Logo">
                            <img src={toyota} alt="" />
                        </div>
                        <div className="Text">
                            <div className="TextHead">
                                toyota
                            </div>
                            <div className="Range">
                                from $40K
                            </div>
                        </div>
                    </div>


                    <div className="Brand">
                        <div className="Logo">
                            <img src={mercedez} alt="" />
                        </div>
                        <div className="Text">
                            <div className="TextHead">
                                mercedes benz
                            </div>
                            <div className="Range">
                                from $40K
                            </div>
                        </div>
                    </div>

                    <div className="Brand">
                        <div className="Logo">
                            <img src={volks} alt="" />
                        </div>
                        <div className="Text">
                            <div className="TextHead">
                                volkswagen
                            </div>
                            <div className="Range">
                                from $40K
                            </div>
                        </div>
                    </div>

                    <div className="Brand">
                        <div className="Logo">
                            <img src={hyundai} alt="" />
                        </div>
                        <div className="Text">
                            <div className="TextHead">
                                hyundai
                            </div>
                            <div className="Range">
                                from $40K
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default ExploreTown
