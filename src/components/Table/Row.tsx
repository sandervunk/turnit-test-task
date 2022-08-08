import {Row as ReactTableRow} from "react-table";
import {DataRow} from "../../types/DataRow";
import styled from "styled-components";

type Props = {
  row: ReactTableRow<DataRow>;
  prepareRow: (row: ReactTableRow<DataRow>) => void
}

export const Row = ({ row, prepareRow }: Props) => {
  prepareRow(row);

  return (
    <TableRow {...row.getRowProps()}>
      {row.cells.map(cell => (
        <Cell {...cell.getCellProps()}>{cell.render('Cell')}</Cell>))}
    </TableRow>
  );
}

const Cell = styled.td`
  padding: 16px;
  
  :not(:first-of-type):not(:last-of-type) {
    min-width: 200px;
  }

  :last-of-type {
    text-align: end;
    padding: 0 16px;
  }
`;

const TableRow = styled.tr`
  
  :hover {
    background: linear-gradient(0deg, rgba(75, 0, 255, 0.1), rgba(75, 0, 255, 0.1)), #FFFFFF;
  }
`;