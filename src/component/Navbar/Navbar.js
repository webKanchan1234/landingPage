import React from 'react'
import styled from "styled-components"
import Img from "../image/logo.jpg"

const Container = styled.div`
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    margin-top: 20px;
   
    
`
const Left = styled.div`
    width: 70%;
    display: flex;

    align-items: center;
    justify-content: space-between;
    @media only screen and (max-width: 360px){
        
        margin-top: 3vmax;
    }
    
`
const ImgContainer = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    @media only screen and (max-width: 360px){
        flex-direction: column;
        
    }
`
const Image = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 20px;
    @media only screen and (max-width: 350px){
        margin-right: 10px;
        margin-left: 3vmax;
    }
`
const Logo = styled.h3`
    font-size: 15px;
    font-weight: 600;
    @media only screen and (max-width: 350px){
        margin-right: 10px;
        margin-left: 3vmax;
    }
`

const Ul = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style:none;
    flex-wrap: wrap;
    font-size: 20px;
    @media only screen and (max-width: 350px){
        flex-direction: column;
    }
`
const Li = styled.li`
    padding: 2px;
    margin-right: 30px;
    color: #99A799;
    font-family: sans-serif;
    @media only screen and (max-width: 350px){
        padding: 1px;
    }
`
const Right = styled.div`
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    @media only screen and (max-width: 350px){
        padding: 1px;
        flex-direction: column;
    }
    
`
const SingIn = styled.button`
    font-size: 20px;
    font-weight: 500;
    border-radius: 20px;
    background-color: white;
    padding: 5px 20px;
    margin: auto;
    border: none;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
        background-color: tomato;
        color: white;
        border: 2px solid white;
  }
  @media only screen and (max-width: 350px){
        padding: 1px;
    }
`
const SingUp = styled.button`
    font-size: 20px;
    font-weight: 500;
    border-radius: 20px;
    background-color: white;
    padding: 5px 20px;
   
    cursor: pointer;
    border: 2px solid tomato;
    color: tomato;
    transition: 0.5s;
    &:hover {
        background-color: tomato;
        color: white;
        border: 2px solid white;
  }
  @media only screen and (max-width: 360px){
    padding: 0px 0px;
    width: 100%;
    
    
    }
`

const Navbar = () => {
    return (
        <>
            <Container>
                <Left>
                    <ImgContainer>
                        <Image src={Img} /> 
                        <Logo>Lasles<b>VPN</b></Logo>
                    </ImgContainer>
                    <Ul>
                        <Li>Pricing</Li>
                        <Li>Testimonials</Li>
                    </Ul>
                </Left>
                <Right>
                    <SingIn>Sign In</SingIn>
                    <SingUp>Sign Up</SingUp>
                </Right>
            </Container>
        </>
    )
}

export default Navbar
