type Row = {
  label: string;
  value: string | number;
};

type TableProps = {
  title: string;
  rows: Row[];
};

export default function MarkDistributionTable({ title, rows }: TableProps) {
  const cell = "border border-solid border-white/20 px-4 py-2";

  return (
    <table className="w-full max-w-md border-collapse border border-white/30 bg-gray-700 text-white">
      <thead>
        <tr>
          <th colSpan={2} className="border border-white/20 bg-gray-800 p-3">
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
