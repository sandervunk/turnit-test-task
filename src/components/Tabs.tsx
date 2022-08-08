import React, {ReactNode, useState} from "react";
import styled from "styled-components";
import {PointsOfSale} from "./PointsOfSale";

type GridItem = {
  title: string;
  content: ReactNode;
}

const renderDummyContent = (tabName: string) => <div>Im <b>{tabName}</b> content</div>;

const gridItems: GridItem[] = [
  { title: "Units", content: renderDummyContent('Units'), },
  { title: "Points of sale", content: <PointsOfSale/>, },
  { title: "Addresses", content: renderDummyContent('Addresses'), },
  { title: "Contact options", content: renderDummyContent('Contact options'), },
  { title: "Service fees", content: renderDummyContent('Service fees'), },
  { title: "Booking access rights", content: renderDummyContent('Booking access rights'), }
];

export const Tabs = () => {
  const [selectedItem, setSelectedItem] = useState<GridItem>(gridItems[1]);

  return (
    <>
      <TabContainer>
        {gridItems.map((item: GridItem, key) => (
          <TabItem key={key} isSelected={item === selectedItem} onClick={() => setSelectedItem(item)}>
            {item.title}
          </TabItem>
        ))}
      </TabContainer>
      <Content>
        {selectedItem.content}
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