import { useAuth } from "../hooks/AuthContext";
import styled from "styled-components";
const StyledMessage = styled.div`
  margin-top: 70px;
  padding: 20px;
  background-color: #f44336;
  max-width: 400px;
  max-height: 100px;
  margin: 0 auto;
  color: darkred;
  text-align: center;
`;
const ProtectedRoute = ({ allowedRoles, children}) => {
  const { user } = useAuth();
  const isAuthorized = allowedRoles.split(',').some(role => user.roles.includes(role));
  return (
    <>
        {isAuthorized ? children : <StyledMessage><h3>Access Denied</h3><p>Login as {allowedRoles}</p></StyledMessage>}
    </>
  );
}
export default ProtectedRoute;