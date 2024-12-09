import styled from "styled-components";
const StyledSpinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border-left-color: #09f;
  animation: spin 1s linear infinite;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default () => {
  return <StyledSpinner />;
};
