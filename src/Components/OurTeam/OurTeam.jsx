import React from 'react'
import styled from 'styled-components'
import Members from '../Members/Members'

const Container = styled.div`
margin: 8em;
display: flex;
justify-content: center;
gap: 3rem;
flex-wrap: wrap;
@media only screen and (max-width: 480px) {
        margin: 0;
        margin-top: 8em;
    
    }

`

const OurTeam = () => {
    return (
        <Container>
            <Members />
            <Members />
            <Members />
            <Members />
            <Members />
            <Members />
        </Container>
    )
}

export default OurTeam
