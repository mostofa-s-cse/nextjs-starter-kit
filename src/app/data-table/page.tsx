import DataTable from '@/components/DataTable';

export default function DataTablePage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Advanced Data Table
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our advanced data table with server-side pagination, debounced
          search, multi-column sorting, and responsive design.
        </p>
      </div>
      <DataTable />
    </div>
  );
}
