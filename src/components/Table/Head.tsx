import {HeaderGroup} from "react-table";
import {DataRow} from "../../types/DataRow";
import styled from "styled-components";

type Props = {
  headerGroups: HeaderGroup<DataRow>[];
}

export const Head = ({ headerGroups }: Props) => {
  return (
    <thead>
    {headerGroups.map(headerGroup => (
      <tr {...headerGroup.getHeaderGroupProps()}>
        {headerGroup.headers.map(column => (
          <Cell {...column.getHeaderProps()}>{column.render('Header')}</Cell>
        ))}
      </tr>
    ))}
    </thead>
  )
}

const Cell = styled.th`
  text-align: start;
`;