import {useMemo, useState} from "react";
import {Column} from "react-table";
import {DataRow} from "../types/DataRow";
import {Table} from "./Table";

const initialState: DataRow[] = [
  { name: 'Hello', type: 'World', tools: ['asd'], reference: "ert", active: true },
  { name: 'Hello2', type: 'World2', tools: ['asd2'], reference: "ert2", active: false },
  { name: 'Hello3', type: 'World3', tools: ['asd3'], reference: "ert3", active: true },
];

export const PointsOfSale = () => {
  const [data, setData] = useState<DataRow[]>(initialState);
  const columns: Column<DataRow>[] = useMemo(
    () => [
      { Header: "Name", accessor: 'name', },
      { Header: "Type", accessor: 'type', },
      { Header: "Type of tool", accessor: 'tools', },
      { Header: "External reference", accessor: 'reference', },
      { Header: "Active", accessor: 'active', Cell: ({ value }) => <input type="checkbox" checked={value}/> },
    ],
    []
  );

  const updateCell = (rowIndex: number, columnId: string, value: string | number | boolean) => {
    setData((prevData) =>
      prevData.map((row, index) =>
        index === rowIndex ? { ...prevData[rowIndex], [columnId]: value } : row
      )
    );
  }

  return <Table columns={columns} data={data} updateCell={updateCell}/>;
}