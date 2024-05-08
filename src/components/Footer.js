
import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
   <Wrapper>
    <div>FOOTER</div>

   </Wrapper>
  )
}

const Wrapper = styled.header`
 display: flex;
 justify-content: space-between;
 align-items: center;
 margin: 0;
 background: #0C2C59;
 width: auto;
 color: whitesmoke;
 `

export default Footer