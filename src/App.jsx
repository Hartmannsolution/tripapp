import { useEffect, useState } from "react";
import { Outlet, useRouteError } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import facade from "./apiFacade";
import styled, {ThemeProvider} from "styled-components";
import { theme } from './theme'; // Import the theme (colors) from theme.js

const App = () => {
  const MainContent = styled.main`
    margin-top: 70px; /* Push content down to avoid it being hidden behind the fixed header */
    backgroud-color: ${(props) => props.theme.blue};
  `;

  const [userContext, setUserContext] = useState(null); // Context to store user info

  const headers = [
    { title: "Trips", url: "/trips" },
    { title: "About", url: "/about" },
    { title: "Contact", url: "/contact" },
  ];

  return (
    <>
      <ThemeProvider theme={theme}>
      <Header
        facade={facade}
        setUserContext={setUserContext}
        headers={headers}
      />
      <MainContent>
        <Outlet />
      </MainContent>
      </ThemeProvider>
    </>
  );
};

export default App;

const ProtectedContentComponent = ({ facade, userContext }) => {
  const [dataFromServer, setDataFromServer] = useState("Loading...");
  const [error, setError] = useState(null);
  useEffect(() => {
    facade.fetchAny(
      "protected/admin_demo",
      (data) => setDataFromServer(data.msg),
      (err) => {
        err ? setError("Error: " + err.message) : "";
      },
      "GET",
      null,
      true
    );
  });
  return (
    <>
      Data from server when logged in as {userContext && userContext.username}:{" "}
      {dataFromServer}
    </>
  );
};
