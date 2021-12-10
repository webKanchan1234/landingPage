import React from 'react'
import styled, {css} from "styled-components"
import Img from "../image/gift.jpg"


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
    flex-wrap: wrap;
    @media only screen and (max-width: 360px){
        flex-direction: column;
    }
`
const ChoosePlan= styled.div`
    width: 25%;
    
    
    justify-content:center;
    align-items: center;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    border: 1px solid #424642;
    padding: 3vmax 1vmax;
    margin: auto 20px;
    @media only screen and (max-width: 360px){
        width: 80%;
        margin-top: 2vmax;
    }
`
const Image = styled.img`
    width: 100px;
    height: 100px;

`
const FreePlan = styled.h4`
    text-align: center;
    font-weight: 600;
    font-size: 20px;
`
const StanPlan = styled.h4`
    text-align: center;
    font-weight: 600;
    font-size: 20px;
`
const PremPlan = styled.h4`
    text-align: center;
    font-weight: 600;
    font-size: 20px;
`
const Head= styled.div`
    height: 15vmax;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 360px){
        height: 30vmax;
        margin-top: 2vmax;
    }
`
const Tick = styled.span`
    color: green;
    padding: 8px;
    margin: 5px;
` 
const Heading = css`
    font-weight: 200;
    color: #424642;
    font-size: 17px;
    margin: 10px;
    padding: 0;
    
`
const FreeBand = styled.h4`
    
    ${Heading}
`
const FreeEncr = styled.h4`
    ${Heading}
`
const FreeNoTraf = styled.h4`
    
    ${Heading}
`
const FreeWork = styled.h4`
    ${Heading}
`
const Free = styled.h4`
    text-align: center;
    font-weight: 700;
    font-size: 20px;
`
const Button = styled.button`
    border: 2px solid tomato;
    border-radius: 20px;
    padding: 7px 40px;
    background-color: white;
    font-size: 20px ;
    color: tomato;
    transition: 0.5s;
    &:hover {
        background-color: tomato;
        color: white;
        border: 2px solid white;
  }
`


const Plan = () => {
    return (
        <>
            <Container>
                <Title>Choose Your Plan</Title>
                <Desc>Let's choose the package that is best for you and explore it happily and <br/> cheerfuly.</Desc>
                <Box>
                    <ChoosePlan>
                        <Image src={Img} />
                        <FreePlan>Free Plan</FreePlan>
                        <Head>
                            <FreeBand> <Tick>✔</Tick>Unlimite bandwidth</FreeBand>
                            <FreeEncr><Tick>✔</Tick>Encrypted Connection</FreeEncr>
                            <FreeNoTraf><Tick>✔</Tick>No Traffic Logs</FreeNoTraf>
                            <FreeWork><Tick>✔</Tick>Works on All Devices</FreeWork>
                        </Head>
                        <Free>Free</Free>
                        <Button>Select</Button>
                    </ChoosePlan>
                    <ChoosePlan>
                        <Image src={Img} />
                        <StanPlan>Standard Plane</StanPlan>
                        <Head>
                            <FreeBand> <Tick>✔</Tick>Unlimite bandwidth</FreeBand>
                            <FreeEncr><Tick>✔</Tick>Encrypted Connection</FreeEncr>
                            <FreeNoTraf><Tick>✔</Tick>Yes Traffic Logs</FreeNoTraf>
                            <FreeWork><Tick>✔</Tick>Works on All Devices</FreeWork>
                            <FreeWork><Tick>✔</Tick>Connect Anyware</FreeWork>
                        </Head>
                        <Free>$9 / mo</Free>
                        <Button>Select</Button>
                    </ChoosePlan>
                    <ChoosePlan>
                        <Image src={Img} />
                        <PremPlan>Premium Plan</PremPlan>
                        <Head>
                            <FreeBand> <Tick>✔</Tick>Unlimite bandwidth</FreeBand>
                            <FreeEncr><Tick>✔</Tick>Encrypted Connection</FreeEncr>
                            <FreeNoTraf><Tick>✔</Tick>No Traffic Logs</FreeNoTraf>
                            <FreeWork><Tick>✔</Tick>Works on All Devices</FreeWork>
                            <FreeWork><Tick>✔</Tick>Connect Anyware</FreeWork>
                            <FreeWork><Tick>✔</Tick>Get New Features</FreeWork>
                        </Head>
                        <Free>$12 / mo</Free>
                        <Button>Select</Button>
                    </ChoosePlan>
                </Box>
            </Container>
        </>
    )
}

export default Plan
