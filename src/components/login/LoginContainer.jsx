import { useEffect } from 'react'
import LoggedIn from './LoggedIn'
import LoginForm from './LoginForm'
import './login.css'
import styled from 'styled-components'
import { useAuth } from '../../hooks/AuthContext'

const StyledLoginContainer = styled.div`
 font: 1em Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    border: 2px solid white;
    padding: 2px;
    `;

export default function LoginContainer() {
    const { loggedIn, user, login, logout } = useAuth();


    // console.log('loggedIn from inside LoginContainer: ', loggedIn)
    // const login = async (user, pass) => {
    //     await facade.login(user, pass);
    //     const token = await facade.readJwtToken(facade.getToken());
    //     const userObj = await {username: token.username, roles: token.roles};
    //     await  setUserContext(userObj);
    //     await  setUserLocally(userObj);
    //     await setLoggedIn(true);
    // }
    // const logout = () => {
    //     facade.logout();
    //     setUserContext(null);
    //     setUserLocally(null);
    //     setLoggedIn(false);
    // }


  return (
    <StyledLoginContainer>

     {!loggedIn ? (<LoginForm login={login} />) :
        (<div>
          <LoggedIn user={user.username} logout={logout} />
        </div>)}
    </StyledLoginContainer>
  )
}
