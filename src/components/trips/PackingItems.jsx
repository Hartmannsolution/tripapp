import React from "react";
import {PackingItemTable} from "./StyledComps";
const PackingItems = ({ items }) => {
  return (
    <>
    <PackingItemTable>
      <thead><tr><th>Item name</th><th>Price</th><th>Item weight</th></tr></thead>
      <tbody>
      {items.map((item, idx) => (
        <tr key={`item.id${idx}`}>
          <td>{item.name}</td>
          <td>Price: { item.buyingOptions? Math.min(...item.buyingOptions.map(option=>option.price)):'Unknown'}</td>
          <td>Weight: {item.weightInGrams}</td>
        </tr>
      ))}
      </tbody>
    </PackingItemTable>
    </>
  );
};
export default PackingItems;