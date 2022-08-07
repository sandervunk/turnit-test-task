import {Cell, Row as ReactTableRow} from "react-table";
import {DataRow} from "../../types/DataRow";

type Props = {
  row: ReactTableRow<DataRow>;
  prepareRow: (row: ReactTableRow<DataRow>) => void
  updateCell: (rowIndex: number, columnId: string, value: string | number | boolean) => void;
}

export const Row = ({ row, prepareRow, updateCell }: Props) => {
  prepareRow(row);

  const handleClick = (cell: Cell<DataRow>) => updateCell(cell.row.index, cell.column.id, '112233');

  return (
    <tr {...row.getRowProps()}>
      {row.cells.map(cell => (
        <td onClick={() => handleClick(cell)} {...cell.getCellProps()}>{cell.render('Cell')}</td>))}
    </tr>
  );
}