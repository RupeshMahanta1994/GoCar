import React from 'react'
import styled from 'styled-components'
import image from "./1.png"
import { LocalShipping, MapsHomeWork, Build } from '@mui/icons-material';

const Wrapper = styled.div`
    margin-top: 8em;
    font-family: 'Roboto', sans-serif;
    @media only screen and (max-width: 480px) {
     margin   : 0;
     margin-top: 8em;
     padding: 0 1.5em;
    }

`;
const Title = styled.div`
display: flex;
align-items: center;
justify-content:flex-start;
padding-left: 6em;
font-size: 2rem;
font-weight: 600;
@media only screen and (max-width: 480px) {
padding: 0;
font-size: 1.3rem;
margin-bottom: 1em;



}



`;

const Container = styled.div`
width:100%;
padding:4em 10em;
display:flex;

gap: 4rem;
@media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 0;
    }
`
const Image = styled.div`
    justify-content: flex-end;
& img{
    width: 40rem;
}
@media only screen and (max-width: 480px) {
& img {
    width: 20rem;
}

}
`
const Text = styled.div`
text-align: left;
& h2 {
    font-size: 3rem;
}
& p {
    font-size: 1.1rem;
    margin: 1em 0;
}
@media only screen and (max-width: 480px) {
& h2 {
    font-size: 1.2rem;
}
& p {
    font-size: 0.8rem;
}

}
`
const Details = styled.div`
display:flex;
align-items:center;
justify-content: space-between;

`
const Item = styled.div`
`
const ItemText = styled.div`
display:flex;
align-items:center;

& p {
    
    
}
`

const About = () => {
    return (
        <Wrapper>
            <Title>About Company</Title>
            <Container>
                <Image>
                    <img src={image} alt="" />
                </Image>
                <Text>
                    <h2>You start the engine
                        and your adventure
                        begins
                    </h2>
                    <p>
                        Certain but she but
                        shyness why cottage.
                        Guy the put instrument
                        sir entreaties affronting.
                        Pretended exquisite see
                        cordially the you. Weeks quiet
                        do vexed or whose. Motionless
                        if no to affronting imprudence
                        no precaution. My indulged as
                        disposal strongly attended.
                    </p>
                    <Details>
                        <Item>
                            <LocalShipping />
                            <ItemText>
                                <h1>20</h1>
                                <p>Car Types</p>
                            </ItemText>
                        </Item>

                        <Item>
                            <MapsHomeWork />
                            <ItemText>
                                <h1>85</h1>
                                <p>Rental Outlets</p>
                            </ItemText>
                        </Item>

                        <Item>
                            <Build />
                            <ItemText>
                                <h1>75</h1>
                                <p>Repair Shop</p>
                            </ItemText>
                        </Item>
                    </Details>
                </Text>
            </Container>

        </Wrapper>
    )
}

export default About
