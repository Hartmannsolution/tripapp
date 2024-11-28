import React from 'react';
import styled from 'styled-components';
import Form from '../components/baseElements/Form';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two equal-width columns */
  grid-template-rows: repeat(3, 1fr); /* Three equal-height rows */
  gap: 10px; /* Optional: spacing between grid items */
  height: calc(100vh - 100px); /* Full height of the viewport for demonstration purposes */
  padding: 10px; /* Optional padding */
`;

const GridItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black; /* Optional: Add borders for visibility */
  background-color: ${(props) => props.bgColor || '#ccc'};
`;

const PageWithGrid = () => {
  return (
    <GridContainer>
      <GridItem 
        bgColor="#f0a" // Custom background color       
        style={{ gridColumn: 'span 2'}}
        >Component 1</GridItem>
      <GridItem
        bgColor="#0fa" // Custom background color
        style={{ gridRow: 'span 2' }}
      >
        {/* This component spans 2 rows */}
        Component 3
      </GridItem>
      <GridItem style={{ backgroundColor: '#fa0' }}>Component 4</GridItem>
      <GridItem style={{ backgroundColor: '#a0f' }}><Form changeHandler={()=>{console.log("Changed som'n");}} submitHandler={()=>console.log("Submittet")}/></GridItem>
    </GridContainer>
  );
};

export default PageWithGrid;
