import {Column, Row as RTRow, useRowSelect, useSortBy, useTable} from "react-table";
import styled from "styled-components";
import {DataRow} from "../../types/DataRow";
import {Head} from "./Head";
import {Row} from "./Row";
import React, {useEffect} from "react";
import {IndeterminateCheckbox} from "./IndeterminateCheckbox";

type Props = {
  columns: Column<DataRow>[]
  data: DataRow[];
  setSelectedRowIds: (ids: string[]) => void;
}

export const Table = ({ columns, data, setSelectedRowIds }: Props) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { selectedRowIds },
  } = useTable<DataRow>({ columns, data }, useSortBy, useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        {
          id: 'selection',
          Header: ({ getToggleAllRowsSelectedProps }) => <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />,
          Cell: ({ row }: { row: RTRow<DataRow> }) => <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />,
        },
        ...columns,
      ])
    });

  useEffect(() => {
    setSelectedRowIds(Object.keys(selectedRowIds));
  }, [selectedRowIds, setSelectedRowIds])

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