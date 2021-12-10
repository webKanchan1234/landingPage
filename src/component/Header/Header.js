import React from 'react'
import styled from 'styled-components'
import Img from "../image/header.png"


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    margin-top: 40px;
    @media only screen and (max-width: 360px){
       flex-direction: column;
       flex-wrap: wrap;
       margin-top: 30px;
    }
`
const Left = styled.div`
    width: 50%  ;
    
    justify-content: center;
    align-items: center;
    padding: 30px 50px;
    @media only screen and (max-width: 360px){
        padding: 10px 0px;
        
        width: 80%  ;
    }
`
const Title = styled.h1`
    font-weight: 700;
    font-size: 4vmax;
    font-family: "ans-serif";
    color: black;
    @media only screen and (max-width: 350px){
        font-size: 6vmax;
    }
`
const Desc = styled.p`
    font-weight: 200;
    color: #424642;
    line-height: 30px;
`
const Button = styled.button`
    background-color: #E40017;
    padding: 10px 30px;
    border-radius: 10px;
    font-size: 20px;
    cursor: pointer;
    border: none;
    color: white;
    box-shadow: 0px 20px 22px -9px #E40017;
` 
const Right = styled.div`
    width: 50%  ;
    padding: 10px;
    @media only screen and (max-width: 360px){
        padding: 10px;
        
        width: 80%  ;
    }

`
const Image = styled.img`
    width: 100%;
    height: 100%;

`
const Header = () => {
    return (
        <>
            <Container>
                <Left>
                    <Title>Want anything to be easy with <b>LaslesVPN</b></Title>
                    <Desc>Provide a network for all your needs with ease and fun using LaslesVPN  discover interesting features from us</Desc>
                    <Button>Get Started</Button>
                </Left>
                <Right>
                    <Image src={Img} />
                </Right>
            </Container>
        </>
    )
}

export default Header
