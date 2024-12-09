import React from "react";
import styled from "styled-components";

const TripPane = styled.div`// left pane 
  overflow-y: auto; /* Enables vertical scrolling */
}`;

const TripContainer = styled.div` 
  background-color: ${(props) => props.theme.whiteSmoke};
  padding: 16px;
  display: flex;
  flex-direction: row;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 50vw;
  margin: 0 auto; /* Centers the container horizontally */
  // background-color: ${(props) => props.theme.lightRose};
  border: "1px solid ${(props) => props.theme.orange}";
`;

// background color as argument
const Card = styled.div`
  background-color: ${({ backgroundcolor }) => backgroundcolor || props.theme.grey};
  border: 1px solid ${(props) => props.theme.orange};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 16px;
  max-width: 300px;
`;

const CardTitle = styled.h2`
  margin: 0;
  font-size: 1.5em;
  color: ${(props) => props.theme.darkCharCoal};
`;

const CardInfo = styled.p`
  margin: 8px 0;
  color: ${(props) => props.theme.darkGrey};
`;

const PackingItemTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin: 16px 0;
  th {
    background-color: ${(props) => props.theme.darkCharCoal};
    color: ${(props) => props.theme.white};
    font-size: 1.2em;
  }
  th, td {
    border: 1px solid ${(props) => props.theme.lightGrey};
    padding: 8px;
    text-align: left;
  }
  tr:nth-child(even) {
    background-color: ${(props) => props.theme.lightGrey};
  }
`;

const DetailsContainer = styled.div`
  background-color: ${(props) => props.theme.whiteSmoke};
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin: 0 auto;
`;


export { TripPane, TripContainer, CardContainer, Card, CardTitle, CardInfo, PackingItemTable, DetailsContainer};