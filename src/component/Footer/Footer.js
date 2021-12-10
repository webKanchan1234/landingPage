import React from 'react'
import styled, {css} from "styled-components"
import Img from "../image/logo.jpg"

const Container = styled.div`
    background-color:#F7F7F7;
    margin-top:80px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    
    @media only screen and (max-width: 360px){
        flex-direction: column;
    }
    
`
const Box= styled.div`
    width: 50%;
    margin-top: 4vmax;
    padding: 2vmax 2vmax;
    justify-content:center;
    align-items: center;
    display: flex;
    @media only screen and (max-width: 360px){
        width: 90%;
        padding: 2vmax 1vmax;
    }
`
const ImgContainer = styled.div`
    width: 70%;
   
`
const ImgBox = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Image = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 20px;
`
const Logo = styled.h3`
    font-size: 20px;
    font-weight: 600;
`
const Desc = styled.h4`
    font-weight: 400;
    color: #424642;
    font-size: 17px;
`
const Copy = styled.h4`
   
    font-weight: 400;
    color: #AAA492;
    font-size: 20px;
`
const ListBox = styled.div`
    width: 30%;
    align-items: center;
    @media only screen and (max-width: 360px){
        width: 90%;
        padding: 0vmax 0vmax;
        margin-right: 2vmax;
    }
    
`
const Product = styled.h4`
    
    font-weight: 600;
    font-size: 20px;
`
const Heading = css`
    font-weight: 200;
    color: #424642;
    font-size: 17px;
    
    padding: 0;
`
const List = styled.h2`
    ${Heading}
`

const Footer = () => {
    return (
        <>
            <Container>
                <Box>
                    <ImgContainer>
                        <ImgBox>
                            <Image src={Img} /> 
                            <Logo>Lasles<b>VPN</b></Logo>
                        </ImgBox>
                        <Desc><b>LaslesVPN</b> is private virtual network that has unique features and has high security.</Desc>
                        <Copy>&copy;2020 LaslesVPN </Copy>
                    </ImgContainer>
                </Box>
                <Box>
                    <ListBox>
                        <Product>Product</Product>
                        <List>Dowload</List>
                        <List>Price</List>
                        <List>Locations</List>
                        <List>Server</List>
                        <List>Countries</List>
                        <List>Blog</List>
                    </ListBox>
                    <ListBox>
                        <Product>Engage</Product>
                        <List>LaslesVPN?</List>
                        <List>Faq</List>
                        <List>Tutorials</List>
                        <List>About us</List>
                        <List>Privacy Policy</List>
                        <List>Terms of Conditions</List>
                    </ListBox>
                    <ListBox>
                        <Product>Earn Money</Product>
                        <List>Affiliate</List>
                        <List>Become Partner</List>
                    </ListBox>
                </Box>
            </Container>
        </>
    )
}

export default Footer
