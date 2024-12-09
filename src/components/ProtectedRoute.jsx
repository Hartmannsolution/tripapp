import { useAuth } from "../hooks/AuthContext";
import  StyledErrorMessage  from "./styledElements/StyledErrorMessage";
const ProtectedRoute = ({ allowedRoles, children}) => {
  const { user } = useAuth();
  const isAuthorized = allowedRoles.split(',').some(role => user.roles.includes(role));
  return (
    <>
        {isAuthorized ? children : <StyledErrorMessage><h3>Access Denied</h3><p>Login as {allowedRoles}</p></StyledErrorMessage>}
    </>
  );
}
export default ProtectedRoute;