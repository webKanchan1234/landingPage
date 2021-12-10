import React from 'react'
import styled, {css} from "styled-components"
import Img from "../image/gift.jpg"
import Carousel from 'react-elastic-carousel';
import { Paper, Button } from '@mui/material'
import User from "../data/Data"
import ReactStars from "react-rating-stars-component";



const Container = styled.div`
    
    margin-top:80px;
    justify-content: center;
    align-items: center;
    width: 100%;
    
`
const Title = styled.h2`
    text-align: center;
    font-weight: 600;
    font-size: 30px;

`
const Desc = styled.h4`
    text-align: center;
    font-weight: 200;
    color: #424642;
    font-size: 20px;
`
const Box= styled.div`

    justify-content:center;
    align-items: center;
    display: flex;
    width: 100%;
    height: 25vmax;
`
const Customer= styled.div`

    width: 100%;
    height: 15vmax;
    justify-content:center;
    align-items: center;
    margin:1.5vmax;
    flex-direction: column;
    border-radius: 10px;
    border: 2px solid #AAA492;
    padding: 1vmax 2vmax;
    overflow: auto;
    
`
const Detail = styled.div`
    width: 100%;
    height: 3vmax;
    
    display: flex;
    
    justify-content: space-between;
    align-items: center;
`
const ImageDiv = styled.div`
    display: flex;
    margin-top: 2vmax;
    justify-content: center;
    align-items: center;
`
const Image = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 1vmax;
`
const Name = styled.h3`
    font-weight: 400;
    font-size: 20px;
`
const Start = styled.h3`
    font-weight: 400;
    font-size: 20px;
`
const Rewiev = styled.div`
    width: 100%;
    font-size: 17px;
    font-weight: 300;
    margin-top: 1vmax;
    padding:1vmax 0vmax;
`


const breakPoints = [
    {width:111,itemsToShow:1},
    {width:550,itemsToShow:2},
    {width:768,itemsToShow:3},
    {width:1200,itemsToShow:4}
]

const HappyCustomer = () => {
   
    return (
        <>
            <Container>
                <Title>Trusted by Thousands of <br /> Happy Customer</Title>
                <Desc>There are stories of our customer who have joined us with great <br /> pleasure when using this crazy features</Desc>
                <Box>
                
                   
                      <Carousel breakPoints={breakPoints}>
                        {
                            User.map(d =>{
                                return(
                                    <Customer>
                                        <Detail>
                                            <ImageDiv>
                                                <Image src={d.url} />
                                                <Name>{d.name}</Name>
                                            </ImageDiv>
                                            <Start> <ReactStars
                                                        count={5}
                                                        value={d.star}
                                                        size={17}
                                                        edit={false}
                                                        isHalf={true}
                                                        activeColor="#ffd700"
                                                    />
                                            </Start>
                                        </Detail>
                                        <Rewiev>{d.desc}</Rewiev>
                                    </Customer>
                                )
                            })
                        }
                        </Carousel>
                        
                       
                    
                </Box>
            </Container>
        </>
    )
}

export default HappyCustomer
