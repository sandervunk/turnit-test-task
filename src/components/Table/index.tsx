import {Column, Row as RTRow, useFilters, useRowSelect, useSortBy, useTable} from "react-table";
import styled from "styled-components";
import {DataRow} from "../../types/DataRow";
import {Header} from "./Header";
import {Row} from "./Row";
import React from "react";
import {IndeterminateCheckbox} from "./IndeterminateCheckbox";
import {ActionBar} from "../ActionBar";
import { Form } from "react-final-form";

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

  const deleteRows = () => setData(data.filter((_, id) => !Object.keys(selectedRowIds).includes(String(id))));

  return (
    <>
      <ActionBar addNewRow={addNewRow} deleteRows={deleteRows} setFilter={setFilter}/>
      <Form
        onSubmit={(val) => setData(val.data)}
        initialValues={{ data }}
        render={({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
              <TableWrapper {...getTableProps()}>
                <Header headerGroups={headerGroups} />
                <tbody {...getTableBodyProps()}>
                {rows.map((row) => <Row row={row} prepareRow={prepareRow} key={row.id} />)}
                </tbody>
              </TableWrapper>
            </form>
        )}
      />
    </>
  );
}

const TableWrapper = styled.table`
  width: 100%;
  border-spacing: 0;
`;