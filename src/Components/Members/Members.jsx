import React from 'react'
import styled from 'styled-components'
import profile from './profile.avif'

const Container = styled.div`
    width: 20rem;
    height: 30rem;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
    @media only screen and (max-width: 480px) {
        height: 23rem;
        width: 18rem;
    }

    & img {
        height: 80%;
        width: 100%;
        object-fit: cover;
    }
`
const ContainerText = styled.div`
width: 100%;
height: 8rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 1em;
box-shadow: 0px 11px 24px -15px rgba(0,0,0,0.75);

& h2 {
    font-size: 1.3rem;
}

& p {
    font-size: 1rem;
}

    
`



function Members() {
    return (
        <Container>
            <img src={profile} alt="" />
            <ContainerText>
                <h2>Luke Miller</h2>
                <p>Salesman</p>
            </ContainerText>
        </Container>
    )
}

export default Members
