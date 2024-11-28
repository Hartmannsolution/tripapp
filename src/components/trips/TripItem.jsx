import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardTitle, CardInfo } from "./StyledComps";

const TripItem = ({ trip, backgroundcolor }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("Clicked on trip", trip);
    navigate(`/trips/${trip.id}`);
  }

  return (
    <Card backgroundcolor={backgroundcolor} onClick={handleClick}>
      <li key={trip.id} style={{ listStyleType: "none" }}>
        <CardTitle>{trip.name}</CardTitle>
        <CardInfo>ID: {trip.id}</CardInfo>
        <CardInfo>Price: {trip.price}</CardInfo>
        <CardInfo>Category: {trip.category}</CardInfo>
        <CardInfo>Start time: {trip.starttime}</CardInfo>
        <CardInfo>End time: {trip.endtime}</CardInfo>
        <CardInfo>Longitude: {trip.longitude}</CardInfo>
        <CardInfo>Latitude: {trip.latitude}</CardInfo>
      </li>
    </Card>
  );
};

export default TripItem;