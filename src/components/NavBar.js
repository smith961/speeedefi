import React, {useState, useEffect} from 'react'

import styled from 'styled-components'
import image from '../images/Speedifi2.png'
import Button from '../styles/Button'
import Capsule, {Environment,CapsuleModal} from '@usecapsule/react-sdk';

import { Link } from 'react-router-dom';



function NavBar() {
  const API_KEY = "4baa3c3bd70180626b580e9028d99192"

  const capsule = new Capsule(
    Environment.BETA, API_KEY
  )
  const [isOpen, setIsOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [walletAddress, setWalletAddress] = useState(undefined);
  const [walletId, setWalletId] = useState(undefined);

  // const clearState = () => {
  //   setLoggedIn(false);
  //   setWalletAddress(undefined);
  //   setWalletId(undefined);
  // };

  const updateLoginStatus = async () => {
    const isLoggedIn = await capsule.isSessionActive();
    setLoggedIn(isLoggedIn);

    const currentWalletAddress = Object.values(capsule.getWallets())?.[0]
      ?.address;
    if (currentWalletAddress !== walletAddress) {
      setWalletAddress(currentWalletAddress);
    }

    const currentWalletId =
      capsule.getWallets()?.[Object.keys(capsule.getWallets())[0]]?.id;
    if (currentWalletId !== walletId) {
      setWalletId(currentWalletId);
    }
  };

  // const link = `https://sepolia.etherscan.io/address/${walletAddress}`;

  useEffect(() => {
    updateLoginStatus();
  }, []);

  const handleSumbit =
    async () => {
      if(loggedIn) {
        await capsule.logout();
        setLoggedIn(false);
      }else{
        setIsOpen(true);
      }
    };
  
  return (
   
    <>
     <Wrapper>
        <Nav>
        <Link to='/'>
          <StyledImg src={image} alt="logo"/>
        </Link>
        <Link to='supply-lend'>
          <Button> Supply/Lend </Button>
        </Link>
        <Link to='/loan-borrow'>
          <Button> Loan/Borrow </Button>
        </Link>
        <Link to='/liquidity'>
          <Button> Liquidity </Button>
        </Link>
        <Link to='/portfolio'>
        <Button> portfolio </Button>
        </Link>
        <Link to='/loan-borrow'>
        <Button>collect rewards </Button>
        </Link>
        <Button
            onClick ={handleSumbit} >
               {loggedIn ? "Logout" : "Connect to wallet"}
            </Button>
            
        </Nav>
    </Wrapper>
    <CapsuleModal
  capsule={capsule}
  isOpen={isOpen}
  onClose={() => {
    updateLoginStatus();
    setIsOpen(false);
  }}
  appName={"speeedefi"}
  // logo = {logo}
 disableEmailLogin={false}
/>
    </>
  )
}

const StyledImg = styled.img`
  height: 100px;
  width: 250px;
  display: flex;
  justify-content: start;
`



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