
import React from 'react'

import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'
import styled from 'styled-components'

function Footer() {
  return (
    <FooterStyle>
       <FooterContainer>
        <Left>
          <Location>
            <FaHome size={20} style={{color: "#fff", marginRight:"2rem"}}/>
          </Location>
          <div>
            <p style={{lineHeight:"30px"}}>Lagos city, Nigeria</p>
            <p style={{lineHeight:"30px"}}> Lagos.</p>
            </div>
        </Left>
        <Phone>
          <h4><FaPhone size={20} style={{color: "#fff", marginRight:"2rem"}}/>08087600329</h4>
        </Phone>
        <Email>
          <h4><FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/>speeedefi@gmail.com</h4>
        </Email>
        <Right>
          <h4> About the Speeedefi</h4>
          <p>Speedefi is a lending protocol on the dimension blockchain</p>
          <Social>
                <FaFacebook size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                <FaTwitter size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}}/>
          </Social>
        </Right>
        </FooterContainer>
  

    </FooterStyle>
  
  )
}



export default Footer

const FooterStyle = styled.div`
height: 10rem;
width: 100%;
padding: 6rem 0;
background-color: #0C2C59;
`
const FooterContainer = styled.div`

max-width: 1140px;
margin: auto;
display: grid;
grid-template-columns: repeat(2,1fr);
grid-gap: 40px;
`

const Left = styled.div`
height: 100%;
max-width: 100%;
display: flex;
flex-direction: column;
padding: 1rem;
`

const Location = styled.div`
display: flex;
margin-bottom: 0.8rem;
`
const Phone = styled.div`

`
const Email = styled.div`
`

const Right = styled.div`
`
const Social = styled.div`

`

