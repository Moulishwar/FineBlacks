import { ProductSpec } from "@/data/products";

interface SpecTableProps {
  specs: ProductSpec[];
}

export default function SpecTable({ specs }: SpecTableProps) {
  return (
    <div className="mt-12 rounded-card overflow-hidden border border-gray-200">
      <table className="w-full">
        <thead>
          <tr className="bg-carbon text-white">
            <th className="text-left text-sm font-semibold px-6 py-4">
              Property
            </th>
            <th className="text-left text-sm font-semibold px-6 py-4">
              Value / Range
            </th>
          </tr>
        </thead>
        <tbody>
          {specs.map((spec, index) => (
            <tr
              key={spec.property}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td className="px-6 py-4 text-sm text-carbon font-medium">
                {spec.property}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {spec.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
