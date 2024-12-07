import React, { useState,useEffect } from "react"
import StyledButton from "../styledElements/Button"
import styled from "styled-components"
const StyledUserInfo = styled.span`
  margin: 1em;
  border 1px solid #ccc;
`;

function LoggedIn({user, logout}){
  console.log('USER FROM LOOGEDIN: ',user)
    
  
    return (
      <>
          <StyledUserInfo>
           {user} 
           </StyledUserInfo>
          <StyledButton onClick={logout}>Logout</StyledButton>
      </>
    )
  }
export default LoggedIn;