import styled from "styled-components";
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
export default StyledButton;