import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import image from '../images/Speedifi.png'
import Button from '../styles/Button'

function NavBar() {
  return (
    <Wrapper>
        <Logo>
          <StyledImg src={image} alt="logo"/>
        </Logo>
        <Nav>
            <Button> Supply/Lend </Button>
            <Button> Loan/Borrow </Button>
            <Button> Liquidity </Button>
            <Button> portfolio </Button>
            <Button>collect rewards </Button>
            <Button>connect wallet </Button>
            
        </Nav>
    </Wrapper>
  )
}

const StyledImg = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50px;
`

const Logo = styled.div`
   width: 200px;

 `;

 const Wrapper = styled.header`
 display: flex;
 justify-content: start;
 align-items: center;
 padding: 8px;`
 

 const Nav = styled.nav`
 display: flex;
 justify-content: space-evenly;
 gap: 60px;
 position: absolute;
 right: 8px;
 `
 
 

export default NavBar