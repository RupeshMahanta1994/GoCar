import "./Footer.css"
import AOS from 'aos'
import "aos/dist/aos.css"
import { useEffect } from "react"

function Footer() {
    useEffect(() => {
        AOS.init();
    })
    return (
        <div className="Footer">
            <div className="Container" >
                <div className="Links" data-aos='fade-up'>
                    <div className="Link">
                        About
                    </div>
                    <div className="Link">
                        How it works
                    </div>
                    <div className="Link" >
                        Career
                    </div>
                    <div className="Link">
                        Affiliates
                    </div><div className="Link">
                        Media
                    </div>

                </div>
                <div className="Links" data-aos='fade-up'>
                    <div className="Link">
                        Seller
                    </div>
                    <div className="Link">
                        Add Vechile
                    </div>
                    <div className="Link">
                        Resource center
                    </div>
                    <div className="Link">
                        Bonds
                    </div>
                    <div className="Link">
                        Release Dates
                    </div>
                </div>
                <div className="Links" data-aos='fade-up'>
                    <div className="Link">
                        Community
                    </div>
                    <div className="Link">
                        Recomendations
                    </div>
                    <div className="Link">
                        Gift Cards
                    </div>
                    <div className="Link">
                        Top Ups
                    </div>
                    <div className="Link">
                        Selling
                    </div>
                </div>
                <div className="Links" data-aos='fade-up'>
                    <div className="Link">
                        Support
                    </div>
                    <div className="Link">
                        Updates for Covid-19
                    </div>
                    <div className="Link">
                        Help Center
                    </div>
                    <div className="Link">
                        Garages
                    </div>
                    <div className="Link">
                        Trust & Safety
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
