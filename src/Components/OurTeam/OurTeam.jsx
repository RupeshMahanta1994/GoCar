import React from 'react'
import styled from 'styled-components'
import Members from '../Members/Members'

const Container = styled.div`
margin: 8em;
display: flex;
justify-content: center;
gap: 3rem;
flex-wrap: wrap;

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
