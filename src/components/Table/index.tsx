import {Column, Row as RTRow, useFilters, useRowSelect, useSortBy, useTable} from "react-table";
import styled from "styled-components";
import {DataRow} from "../../types/DataRow";
import {Head} from "./Head";
import {Row} from "./Row";
import React from "react";
import {IndeterminateCheckbox} from "./IndeterminateCheckbox";
import {ActionBar} from "../ActionBar";

const emptyRow: DataRow = { name: '', type: '', tools: [], reference: "", active: false };

type Props = {
  columns: Column<DataRow>[]
  data: DataRow[];
  setData: (data: DataRow[]) => void;
}

export const Table = ({ columns, data, setData }: Props) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { selectedRowIds },
    setFilter,
  } = useTable<DataRow>({ columns, data },
    useFilters,
    useSortBy,
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        {
          id: 'selection',
          Header: ({ getToggleAllRowsSelectedProps }) => <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />,
          Cell: ({ row }: { row: RTRow<DataRow> }) => <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />,
        },
        ...columns,
      ])
    },
  );

  const addNewRow = () => setData([...data, emptyRow]);

  const deleteRows = () => {
    const ids = Object.keys(selectedRowIds);

    if (ids.length > 0) {
      setData(data.filter((_, index) => !ids.includes(index.toString())))
    }
  }

  return (
    <>
      <ActionBar addNewRow={addNewRow} deleteRows={deleteRows} setFilter={setFilter} />
      <TableWrapper {...getTableProps()}>
        <Head headerGroups={headerGroups}/>
        <tbody {...getTableBodyProps()}>
        {rows.map((row, key) => <Row row={row} prepareRow={prepareRow} key={key}/>)}
        </tbody>
      </TableWrapper>
    </>
  );
}

const TableWrapper = styled.table`
  width: 100%;
  border-spacing: 0;
`;