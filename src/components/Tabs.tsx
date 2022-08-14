import React from "react";
import styled from "styled-components";
import {PointsOfSale} from "./PointsOfSale";

const gridItems: string[] = [
  "Units",
  "Points of sale",
  "Addresses",
  "Contact options",
  "Service fees",
  "Booking access rights"
];

export const Tabs = () => {
  return (
    <>
      <TabContainer>
        {gridItems.map((item) => <TabItem key={item} isSelected={item === "Points of sale"}>{item}</TabItem>)}
      </TabContainer>
      <Content>
        <PointsOfSale/>
      </Content>
    </>
  );
}

const Content = styled.div`
  padding: 16px 24px;
  background: white;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
`;

const TabItem = styled.div<{ isSelected: boolean }>`
  padding: 8px 16px;
  cursor: pointer;
  color: ${(props) => props.isSelected ? '#4B00FF' : 'black'};
  background: ${(props) => props.isSelected ? 'white' : '#E5E5E5'};
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
`;