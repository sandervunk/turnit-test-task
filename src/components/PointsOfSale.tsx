import {useMemo, useState} from "react";
import {Column, Row} from "react-table";
import {DataRow} from "../types/DataRow";
import {Table} from "./Table";
import {ActionCell} from "./Table/Cell/ActionCell";
import {Cell} from "./Table/Cell";
import { FieldType } from "../types/FieldType";

const initialState: DataRow[] = [
  { name: 'Hello', type: 'Van Henry', tools: ['April Tucker', 'Kelly Snyder'], reference: "ert", active: true },
  { name: 'Hello2', type: 'Van Henry', tools: ['April Tucker', 'Kelly Snyder'], reference: "ert2", active: false },
  { name: 'Hello3', type: 'Van Henry', tools: ['April Tucker', 'Kelly Snyder'], reference: "ert3", active: true },
];

export const PointsOfSale = () => {
  const [data, setData] = useState<DataRow[]>(initialState);
  const [focusRowId, setFocusRowId] = useState<string | null>(null);

  const isInFocus = useMemo(() => (id: string) => focusRowId === id, [focusRowId]);

  const columns: Column<DataRow>[] = useMemo(
    () => [
      {
        Header: "Name",
        accessor: 'name',
        Cell: ({ row, value }) => <Cell nameKey={`[${row.id}]name`} value={value} inFocus={isInFocus(row.id)} type={FieldType.Text}/>
      },
      {
        Header: "Type",
        accessor: 'type',
        Cell: ({ row, value }) => <Cell nameKey={`[${row.id}]type`} value={value} inFocus={isInFocus(row.id)} type={FieldType.Select}/>
      },
      {
        Header: "Type of tool",
        accessor: 'tools',
        Cell: ({ row, value }) => <Cell nameKey={`[${row.id}]tools`} value={value} inFocus={isInFocus(row.id)} type={FieldType.MultiSelect}/>
      },
      {
        Header: "External reference",
        accessor: 'reference',
        Cell: ({ row, value }) => <Cell nameKey={`[${row.id}]reference`} value={value} inFocus={isInFocus(row.id)} type={FieldType.Text}/>
      },
      {
        Header: "Active",
        accessor: 'active',
        Cell: ({ row, value }) => <Cell nameKey={`[${row.id}]active`} value={value} inFocus={isInFocus(row.id)} type={FieldType.Checkbox}/>
      },
      {
        Header: () => <span/>,
        id: 'actions',
        Cell: ({ row }: {row: Row<DataRow>}) => (
          <ActionCell
            inFocus={isInFocus(row.id)}
            onStartEdit={() => setFocusRowId(row.id)}
            onEndEdit={() => setFocusRowId(null)}
          />
        )
      }
    ],
    [isInFocus]
  );

  return (
    <Table columns={columns} data={data} setData={setData}/>
  );
}