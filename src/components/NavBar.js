import React, {useState, useEffect} from 'react'

import styled from 'styled-components'
import image from '../images/Speedifi.png'
import Button from '../styles/Button'
import Capsule, {
  Environment,
  CapsuleModal,
} from '@usecapsule/react-sdk';



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
        <Logo>
          <StyledImg src={image} alt="logo"/>
        </Logo>
        <Nav>
            <Button> Supply/Lend </Button>
            <Button> Loan/Borrow </Button>
            <Button> Liquidity </Button>
            <Button> portfolio </Button>
            <Button>collect rewards </Button>
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
 // a link to your logo, to be shown in the modal
  
 
  
  disableEmailLogin={false}
/>
    </>
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