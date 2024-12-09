import React, { useState, useEffect } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import {fetchAny as apiFetch} from "../../apiFacade";
import { DetailsContainer } from "./StyledComps";
import GuideDetails from "./GuideDetails";
import PackingItems from "./PackingItems";
import StyledErrorMessage from "../styledElements/StyledErrorMessage";
import { useError } from "../../hooks/ErrorContext";

const TripDetails = () => {
  const { handleGlobalError, error} = useError();
  const [trip, setTrip] = useState({guide: {}, packingItems: []});
  let { tripId } = useParams();
  
  useEffect(() => {
    (async () => {
      try {
        const data = await apiFetch(`trips/${tripId}`, 'GET', null, true);
        setTrip(data);
      } catch (error) {
        handleGlobalError(error);
      }
    })();
  },[tripId]);

  const summedPrice = trip.packingItems && 
  trip.packingItems
  .reduce((acc, item) => acc + Math.min(...item.buyingOptions
    .map(option=>option.price)), 0);

  const totalWeight = trip.packingItems && trip.packingItems.reduce((acc, item) => acc + item.weightInGrams, 0);

  return (
    error ? <StyledErrorMessage>{error}</StyledErrorMessage> :
    <DetailsContainer>
      <h1> {trip.name} </h1>
      {trip.guide && <GuideDetails guide={trip.guide} />}
      <PackingItems items={trip.packingItems} />
      <TotalPriceWeight 
      itemsprice={'$'+summedPrice+',-'} itemsweight={totalWeight/1000+' Kg'} />
    </DetailsContainer>
  );
};


const TotalPriceWeight = ({ itemsprice, itemsweight }) => {
  return (
    <div>
      <p><b>Total price: {itemsprice}</b></p>
      <p><b>Total weight: {itemsweight}</b></p>
    </div>
  );
};
export default TripDetails;