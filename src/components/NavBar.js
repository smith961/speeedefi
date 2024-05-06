import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import image from '../images/Speedifi2.png'
import Button from '../styles/Button'
import {TestButton} from '../styles/Button'

function NavBar() {
  return (
    <Wrapper>
      <Nav>
        <Link to='/'>
          <StyledImg src={image} alt="logo"/>
        </Link>
          
        <Link to='/supply-lend'>
          <Button> Supply/Lend </Button>
        </Link>
          
        <Link to='/loan-borrow'>
          <Button> Loan/Borrow </Button>
        </Link>
          
        <Link to='/liquidity'>
          <Button> Liquidity </Button>
        </Link>
          
        <Link to='/portfolio'>
          <Button> Portfolio </Button>
        </Link>
          
        <Link to='/loan-borrow'>
          <Button> Collect Rewards </Button>
        </Link>
        
        <Link to='wallet'>
          <TestButton> Connect Wallet </TestButton>
        </Link> 
          
          
      </Nav>
    </Wrapper>
  )
}

const StyledImg = styled.img`
  height: 150px;
  width: 250px;
  display: flex;
  justify-content: start;
  
`

const Logo = styled.div`
  // width: 200px;

 `;

 const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    background: #0C2C59;
    width: auto;
    `
    

 const Nav = styled.nav`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 8px;
    width: 100%;
  `
  
 

export default NavBar