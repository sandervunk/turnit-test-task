import React, {ReactNode, useState} from "react";
import styled from "styled-components";
import {PointsOfSale} from "./PointsOfSale";

type GridItem = {
  title: string;
  content: ReactNode;
}

const gridItems: GridItem[] = [
  { title: "Units", content: <div>Im Units content</div> },
  { title: "Points of sale", content: <PointsOfSale /> },
  { title: "Addresses", content: <div>Im Addresses content</div> },
  { title: "Contact options", content: <div>Im Contact options content</div> },
  { title: "Service fees", content: <div>Im Service fees content</div> },
  { title: "Booking access rights", content: <div>Im Booking access rights content</div> }
];

export const Grid = () => {
  const [selectedItem, setSelectedItem] = useState<GridItem>(gridItems[1]);

  return (
    <>
      <HeaderWrapper>
        {gridItems.map((item: GridItem, key) => (
          <HeaderItem
            key={key}
            isSelected={item===selectedItem}
            onClick={() => setSelectedItem(item)}
          >
            {item.title}
          </HeaderItem>
        ))}
      </HeaderWrapper>
      <ContentWrapper>
        {selectedItem.content}
      </ContentWrapper>
    </>
  );
}

const ContentWrapper = styled.div`
  padding: 16px 24px;
  background: white;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
`;

const HeaderItem = styled.div<{isSelected: boolean}>`
  padding: 8px 16px;
  cursor: pointer;
  color: ${(props) => props.isSelected ? '#4B00FF' : 'black'};
  background: ${(props) => props.isSelected ? 'white' : '#E5E5E5'};
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
`;