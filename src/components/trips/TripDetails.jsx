import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import facade from "../../apiFacade";
import { DetailsContainer } from "./StyledComps";
import GuideDetails from "./GuideDetails";
import PackingItems from "./PackingItems";

const TripDetails = () => {
  const [trip, setTrip] = useState({guide: {}, packingItems: []});
  let { tripId } = useParams();
  
  useEffect(() => {
    (async () => {
      try {
        await facade.fetchAny(`trips/${tripId}`, setTrip, (error)=>alert(error), 'GET',null, true);
      } catch (error) {
        console.error(error);
      }
    })();
  },[tripId]);

  const summedPrice = trip.packingItems && 
  trip.packingItems
  .reduce((acc, item) => acc + Math.min(...item.buyingOptions
    .map(option=>option.price)), 0);

  const totalWeight = trip.packingItems && trip.packingItems.reduce((acc, item) => acc + item.weightInGrams, 0);

  return (
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