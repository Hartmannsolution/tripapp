import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // min-height: 50vh;
  // padding: 20px;
  background-color: ${(props) => props.theme.white || '#ffffff'}; // white background
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: row; // Set the direction to row for one-line layout
  align-items: center;
  // padding: 10px;
  border: 1px solid ${(props) => props.theme.borderColor || '#b3e5fc'};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.lightSkyBlue || '#e0f7fa'}; // light blue background

  // Responsive adjustments
  @media (max-width: 768px) {
    flex-direction: column; // Stack elements vertically if space is limited
    align-items: flex-start; // Align elements to the left
  }
`;

const StyledInput = styled.input`
  margin-right: 10px; // Add margin to create space between input elements
  padding: 8px;
  border: 1px solid ${(props) => props.theme.lightBlue};
  border-radius: 4px;
  font-size: 1em;
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.blue};
    box-shadow: 0 0 3px rgba(2, 136, 209, 0.5);
  }
  flex-grow: 1; // Allow input fields to grow and fill available space if needed

  /* Override autofill styles that makes the input field hava a yellow background*/
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px ${(props) => props.theme.white || '#ffffff'} inset;
    -webkit-text-fill-color: ${(props)=>props.theme.darkGrey}; /* Set text color */
  }
`;

const StyledButton = styled.button`
  padding: 8px 16px;
  background-color: ${(props) => props.theme.buttonBackground || '#0288d1'};
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
  &:hover {
    background-color: ${(props) => props.theme.buttonHover || '#0277bd'};
  }
`;

// Main Component
function LogIn({ login }) {
  const init = { username: '', password: '' };
  const [loginCredentials, setLoginCredentials] = useState(init);

  const performLogin = (evt) => {
    evt.preventDefault();
    login(loginCredentials.username, loginCredentials.password);
  };

  const onChange = (evt) => {
    setLoginCredentials({ ...loginCredentials, [evt.target.id]: evt.target.value });
  };

  return (
    <FormContainer>
      <StyledForm onChange={onChange}>
        <StyledInput placeholder="User Name" id="username" />
        <StyledInput type="password" placeholder="Password" id="password" />
        <StyledButton onClick={performLogin}>Login</StyledButton>
      </StyledForm>
    </FormContainer>
  );
}

export default LogIn;
