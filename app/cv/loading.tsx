export default function Loading() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-48 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-96 mx-auto"></div>
          </div>
        </div>
        <div className="mt-12">
          <div className="card animate-pulse">
            <div className="h-20 w-20 bg-gray-300 rounded-full mx-auto mb-6"></div>
            <div className="h-6 bg-gray-300 rounded w-32 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-64 mx-auto mb-6"></div>
            <div className="flex justify-center space-x-4">
              <div className="h-10 bg-gray-300 rounded w-32"></div>
              <div className="h-10 bg-gray-300 rounded w-32"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}