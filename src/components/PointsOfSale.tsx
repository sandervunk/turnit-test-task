import {useMemo, useState} from "react";
import {Column, Row} from "react-table";
import {DataRow} from "../types/DataRow";
import {Table} from "./Table";
import {ActionCell} from "./Table/ActionCell";
import {DefaultCell, FieldType} from "./Table/DefaultCell";

const initialState: DataRow[] = [
  { name: 'Hello', type: 'World', tools: ['asd'], reference: "ert", active: true },
  { name: 'Hello2', type: 'World2', tools: ['asd2'], reference: "ert2", active: false },
  { name: 'Hello3', type: 'World3', tools: ['asd3'], reference: "ert3", active: true },
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
        Cell: ({ row, value }) => <DefaultCell value={value} inFocus={isInFocus(row.id)} fieldType={FieldType.Text}/>
      },
      {
        Header: "Type",
        accessor: 'type',
        Cell: ({ row, value }) => <DefaultCell value={value} inFocus={isInFocus(row.id)} fieldType={FieldType.Text}/>
      },
      {
        Header: "Type of tool",
        accessor: 'tools',
        Cell: ({ row, value }) => <DefaultCell value={value} inFocus={isInFocus(row.id)} fieldType={FieldType.Select}/>
      },
      {
        Header: "External reference",
        accessor: 'reference',
        Cell: ({ row, value }) => <DefaultCell value={value} inFocus={isInFocus(row.id)} fieldType={FieldType.MultiSelect}/>
      },
      {
        Header: "Active",
        accessor: 'active',
        Cell: ({ row, value }) => <DefaultCell value={value} inFocus={isInFocus(row.id)} fieldType={FieldType.Checkbox}/>
      },
      {
        Header: () => <span/>,
        id: 'actions',
        Cell: ({ row }: {row: Row<DataRow>}) => (
          <ActionCell
            inFocus={isInFocus(row.id)}
            onStartEdit={() => setFocusRowId(row.id)}
            onEndEdit={() => setFocusRowId(null)}
            onSave={() => console.log(`Saved new data for row ${row.id}!`)}/>
        )
      }
    ],
    [isInFocus]
  );

  return (
    <Table columns={columns} data={data} setData={setData}/>
  );
}