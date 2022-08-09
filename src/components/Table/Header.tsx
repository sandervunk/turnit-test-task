import {HeaderGroup} from "react-table";
import {DataRow} from "../../types/DataRow";
import styled from "styled-components";

type Props = {
  headerGroups: HeaderGroup<DataRow>[];
}

export const Header = ({ headerGroups }: Props) => {
  return (
    <THead>
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <Cell {...column.getHeaderProps(column.getSortByToggleProps())}>
              {column.render('Header')}
              <span>{column.isSorted ? column.isSortedDesc ? ' 🔽' : ' 🔼' : ''}</span>
            </Cell>
          ))}
        </tr>
      ))}
    </THead>
  )
}

const Cell = styled.th`
  text-align: start;
  padding: 16px;

  :not(:first-of-type):not(:last-of-type) {
    min-width: 200px;
  }
`;

const THead = styled.thead`
  background: #F6F6F6;
`;