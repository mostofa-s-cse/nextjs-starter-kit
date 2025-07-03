import Counter from '@/components/Counter';

export default function CounterPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Redux Counter</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Demonstrates Redux Toolkit state management with TypeScript support.
          Try incrementing, decrementing, and adding custom amounts.
        </p>
      </div>

      <div className="flex justify-center">
        <Counter />
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Redux Toolkit Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-gray-900 mb-2">State Management</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Centralized state with Redux store</li>
              <li>• Type-safe actions and reducers</li>
              <li>• Immutable state updates with Immer</li>
              <li>• DevTools integration for debugging</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-2">
              TypeScript Integration
            </h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Typed hooks (useAppSelector, useAppDispatch)</li>
              <li>• Type-safe action creators</li>
              <li>• Inferred state types</li>
              <li>• Runtime type checking</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
