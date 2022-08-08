import {Column, useTable} from "react-table";
import styled from "styled-components";
import {DataRow} from "../../types/DataRow";
import {Head} from "./Head";
import {Row} from "./Row";

type Props = {
  columns: Column<DataRow>[]
  data: DataRow[];
  addNewRow: () => void;
}

export const Table = ({ columns, data, addNewRow }: Props) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable<DataRow>({ columns, data });

  return (
    <TableWrapper {...getTableProps()}>
      <Head headerGroups={headerGroups}/>
      <tbody {...getTableBodyProps()}>
      {rows.map((row, key) => <Row row={row} prepareRow={prepareRow} key={key}/>)}
      </tbody>
    </TableWrapper>
  );
}

const TableWrapper = styled.table`
  width: 100%;
  border-spacing: 0;
`;