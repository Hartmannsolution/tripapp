import React from "react";
import styled from "styled-components";
import {
  Trips,
  TripDetails,

} from "../components/trips/Trips";

const Container = styled.div`
  display: flex;
  flex-direction: row; /* Arrange children side-by-side */
  height: calc(
    100vh - 100px
  ); /* Adjust height to account for the header (e.g., 60px) */
  width: 80%; /* Full width of the viewport */
  margin: auto;
  padding: 0;
`;

const Pane = styled.div`
  flex: 1; /* Ensures the panes share available horizontal space equally */
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black; /* Optional: Add border for visibility */
  background-color: ${(props) => props.bgColor || props.theme.grey}; /* Use prop to set bg color */
  margin: 10px;
  overflow-y: auto; /* Enables vertical scrolling */
`;

const App = () => {
  return (
    <Container>
      <Pane style={{ backgroundColor: "#f0f0f0" }}>
        <Trips />
      </Pane>
      <Pane bgColor="#c0c0c0">
        <TripDetails />
      </Pane>
    </Container>
  );
};
export default App;
