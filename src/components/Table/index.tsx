import {Column, useRowSelect, useTable} from "react-table";
import styled from "styled-components";
import {DataRow} from "../../types/DataRow";
import {Head} from "./Head";
import {Row} from "./Row";

type Props = {
  columns: Column<DataRow>[]
  data: DataRow[];
  updateCell: (rowIndex: number, columnId: string, value: string | number | boolean) => void;
}

export const Table = ({ columns, data, updateCell }: Props) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable<DataRow>(
    { columns, data },
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        { id: 'selection', Header: () => <input type="checkbox"/>, Cell: () => <input type="checkbox"/>, },
        ...columns,
      ])
    },
  );

  return (
    <TableWrapper {...getTableProps()}>
      <Head headerGroups={headerGroups}/>
      <tbody {...getTableBodyProps()}>
      {rows.map((row, key) => <Row row={row} prepareRow={prepareRow} updateCell={updateCell} key={key}/>)}
      </tbody>
    </TableWrapper>
  );
}

const TableWrapper = styled.table`
  width: 100%;
`;