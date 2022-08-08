import {useMemo, useState} from "react";
import {Column} from "react-table";
import {DataRow} from "../types/DataRow";
import {Table} from "./Table";
import {ActionCell} from "./Table/ActionCell";
import {DefaultCell} from "./Table/DefaultCell";
import {ActionBar} from "./ActionBar";

const initialState: DataRow[] = [
  { name: 'Hello', type: 'World', tools: ['asd'], reference: "ert", active: true },
  { name: 'Hello2', type: 'World2', tools: ['asd2'], reference: "ert2", active: false },
  { name: 'Hello3', type: 'World3', tools: ['asd3'], reference: "ert3", active: true },
];

const emptyRow: DataRow = { name: '', type: '', tools: [], reference: "", active: false };

export const PointsOfSale = () => {
  const [data, setData] = useState<DataRow[]>(initialState);
  const [focusRowId, setFocusRowId] = useState<string | null>(null);
  const [selectedRowIds, setSelectedRowIds] = useState<string[]>([]);

  const isInFocus = useMemo(() => (id: string) => focusRowId === id, [focusRowId]);

  const columns: Column<DataRow>[] = useMemo(
    () => [
      {
        Header: "Name",
        accessor: 'name',
        Cell: ({ row, cell, value }) => <DefaultCell value={value} name={cell.column.id} inFocus={isInFocus(row.id)} inputType="text"/>
      },
      {
        Header: "Type",
        accessor: 'type',
        Cell: ({ row, cell, value }) => <DefaultCell value={value} name={cell.column.id} inFocus={isInFocus(row.id)} inputType="text"/>
      },
      {
        Header: "Type of tool",
        accessor: 'tools',
        Cell: ({ row, cell, value }) => <DefaultCell value={value} name={cell.column.id} inFocus={isInFocus(row.id)} inputType="text"/>
      },
      {
        Header: "External reference",
        accessor: 'reference',
        Cell: ({ row, cell, value }) => <DefaultCell value={value} name={cell.column.id} inFocus={isInFocus(row.id)} inputType="text"/>
      },
      {
        Header: "Active",
        accessor: 'active',
        Cell: ({ row, cell, value }) => <DefaultCell value={value} name={cell.column.id} inFocus={isInFocus(row.id)} inputType="checkbox"/>
      },
      {
        Header: () => <span/>,
        id: 'actions',
        Cell: ({ row: { id } }: { row: { id: string } }) => (
          <ActionCell
            rowId={id}
            inFocus={isInFocus(id)}
            onStartEdit={setFocusRowId}
            onEndEdit={() => setFocusRowId(null)}
            onSave={() => {}}
          />
        )
      }
    ],
    [isInFocus]
  );

  const addNewRow = () => setData((prevData) => ([...prevData, emptyRow]));

  const deleteRows = () => {
    if(selectedRowIds.length > 0) {
      setData((prevData) => prevData.filter((_, index) => !selectedRowIds.includes(index.toString())));
      setSelectedRowIds([]);
    }
  }

  return (
    <>
      <ActionBar addNewRow={addNewRow} deleteRows={deleteRows} />
      <Table columns={columns} data={data} setSelectedRowIds={setSelectedRowIds} />
    </>
  );
}