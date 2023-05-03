import React from 'react'
import styled from 'styled-components'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import profile from './profile.avif'

const Container = styled.div`
margin: 10em 8em;

`

const ContainerText = styled.div`
text-align: center;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 0.6rem;
& h5 {
    font-size: 1.2rem;
    
}

& h3 {
    font-size: 2.5rem;
    @media only screen and (max-width: 480px) {
     font-size   :2rem ;
    }
}
& p{
    font-size: 1.1rem;
    width: 60%;
    line-height: 1.3rem;
    @media only screen and (max-width: 480px) {
        width: 18rem;
        font-size: 1rem;
    }
}


`

const ContainerCards = styled.div`
display: flex;
gap: 1rem;
align-items: center;
justify-content: center;
margin-top: 3em;
@media only screen and (max-width: 480px) {
        flex-direction: column;
    }



`

const ContainerCard = styled.div`
width: 30rem;
padding: 1.8em;
display: flex;
flex-direction: column;
gap: 1.5rem;
box-shadow: 0px 0px 21px -9px rgba(0,0,0,0.75);
& p {
    font-size: 1.4rem;

}
@media only screen and (max-width: 480px) {
     width: 20rem;   
    }
    & p {
        font-size: 1rem;
    }
`

const User = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const UserName = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    & img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    @media only screen and (max-width: 480px) {
     & img {
        width: 30px;
        height: 30px;
     }   
    }
`


const Testimonials = () => {
    return (
        <Container>
            <ContainerText>
                <h5>Reviewed by People</h5>
                <h3>Client's Testimonials</h3>
                <p>
                    Discover the positive impact we've
                    made on the our clients by reading
                    through their testimonials. Our clients
                    have experienced our service and results,
                    and they're eager to share their positive
                    experiences with you.
                </p>
            </ContainerText>
            <ContainerCards>
                <ContainerCard>
                    <p>
                        "We rented a car from this website and
                        had an amazing experience! The booking
                        was easy and the rental rates were very
                        affordable. "
                    </p>
                    <User>
                        <UserName>
                            <img src={profile} alt="" />
                            <div className="Name">
                                <h4>Swayam Panda</h4>
                                <p>Salipur</p>
                            </div>
                        </UserName>
                        <FormatQuoteIcon />
                    </User>


                </ContainerCard>

                <ContainerCard>
                    <p>
                        "We rented a car from this website and
                        had an amazing experience! The booking
                        was easy and the rental rates were very
                        affordable. "
                    </p>
                    <User>
                        <UserName>
                            <img src={profile} alt="" />
                            <div className="Name">
                                <h4>Swayam Panda</h4>
                                <p>Salipur</p>
                            </div>
                        </UserName>
                        <FormatQuoteIcon />
                    </User>


                </ContainerCard>
            </ContainerCards>
        </Container>
    )
}

export default Testimonials
