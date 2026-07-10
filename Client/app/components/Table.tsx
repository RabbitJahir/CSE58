type Row = {
  label: string;
  value: string | number;
};

type TableProps = {
  title: string;
  rows: Row[];
};

export default function Table({ title, rows }: TableProps) {
  const cell =
    "border border-gray-500 px-4 py-2";

  return (
    <table className="bg-gray-700 text-white border-collapse">
      <thead>
        <tr>
          <th colSpan={2} className="p-3 border border-gray-500">
            {title}
          </th>
        </tr>
      </thead>

      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            <td className={cell}>{row.label}</td>
            <td className={cell}>{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}