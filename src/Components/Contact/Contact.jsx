import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Send, Phone, Mail, LocationOn } from '@mui/icons-material';
import AOS from 'aos'
import 'aos/dist/aos.css';

const Container = styled.div`
    margin: 8em;
    display: flex;
    gap: 5rem;
    padding: 3em;

    @media only screen and (max-width: 480px) {
        width: 100%;
        margin: 0;
        margin-top: 8em;
        flex-direction: column;
        padding: 1.2em;
    }

`

const ContainerText = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
justify-content: flex-start;

& h1{
    font-size: 3rem;
    @media only screen and (max-width: 480px) {
        font-size: 2.5rem;
        text-align: center;
    }
}

& p{
    font-size: 1rem;
    width: 25rem;
    @media only screen and (max-width: 480px) {
        font-size: 0.9rem;
        width: 20rem;
        text-align: center;
    }
}

& a {
    text-decoration: none;
    display: flex;
    gap: 1rem;
    align-items: center;
    color: black;
    @media only screen and (max-width: 480px) {
        justify-content: center;
    }
    
    
}

@media only screen and (max-width: 480px) {
        width: 100%;
    }
    
`
const ContainerForm = styled.div`
width: 30rem;
display: flex;
flex-direction: column;
justify-content: flex-start;
& input, textarea{
    margin: 0.5em 0 1em 0;
    font-size: 1.2rem;
    padding: 0.6em;
    border: none;
    outline: none;
    background: #ededed;
    @media only screen and (max-width: 480px) {
        width: 100%;
    }
    
}

& label {
    font-weight: bold;
}
@media only screen and (max-width: 480px) {
        width: 100%;
    }
    


    
`
const Button = styled.button`
display: flex;
gap: 0.5rem;
align-items: center;
justify-content: center;
margin-top: 1rem;
font-size: 1.2rem;
font-weight: bold;
    padding: 0.6em;
    border: none;
    outline: none;
    color: #fff;
    background: rgb(123, 123, 236);
    
`

const Contact = () => {
    useEffect(() => {
        AOS.init()
    })
    return (
        <Container>
            <ContainerText data-aos="fade-right">
                <h1 data-aos="fade-up">
                    Need additional information?
                </h1>

                <p data-aos="zoom-in">
                    A multifaceted professional skilled
                    in multiple fields of research, development
                    as well as a learning specialist. Over 15
                    years of experience.
                </p>
                <a data-aos='fade-up' href=""><Phone /> (123) 952-5896</a>
                <a data-aos='fade-up' href=""><Mail /> cargo@carmail.com</a>
                <a data-aos='fade-up' href=""><LocationOn /> Jamshepur, Jharkhand</a>

            </ContainerText>
            <ContainerForm data-aos="fade-left">
                <label data-aos="fade-up" htmlFor="">Full Name</label>
                <input data-aos="zoom-in" type="text" placeholder='E.g. "Joe Shmoe' />

                <label data-aos="fade-up" htmlFor="">Email</label>
                <input data-aos="zoom-in" type="email" placeholder='youremail@example.com' />

                <label data-aos="fade-up" htmlFor="">Tell us about it</label>
                <textarea data-aos="zoom-in" placeholder='Write Here' cols="30" rows="10"></textarea>

                <Button data-aos="zoom-in">
                    Send Message
                    <Send />
                </Button>
            </ContainerForm>
        </Container>
    )
}

export default Contact
