// Reusable Shimmer Components using only React and Tailwind CSS

// About Section Shimmer
const ShimmerAbout = () => {
  return (
    <section className="py-24 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-8">
        {/* Header Shimmer */}
        <div className="text-center mb-16">
          <div className="h-12 w-64 bg-gray-700 animate-pulse rounded mx-auto mb-4"></div>
          <div className="w-24 h-1 bg-gray-700 animate-pulse mx-auto mb-6"></div>
          <div className="h-6 w-96 bg-gray-700 animate-pulse rounded mx-auto"></div>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column Shimmer */}
          <div className="space-y-8">
            {/* Section 1 */}
            <div className="space-y-4">
              <div className="h-8 w-48 bg-gray-700 animate-pulse rounded"></div>
              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-700 animate-pulse rounded"></div>
                <div className="h-4 w-5/6 bg-gray-700 animate-pulse rounded"></div>
                <div className="h-4 w-4/5 bg-gray-700 animate-pulse rounded"></div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <div className="h-6 w-32 bg-gray-700 animate-pulse rounded"></div>
              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-700 animate-pulse rounded"></div>
                <div className="h-4 w-3/4 bg-gray-700 animate-pulse rounded"></div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <div className="h-6 w-40 bg-gray-700 animate-pulse rounded"></div>
              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-700 animate-pulse rounded"></div>
                <div className="h-4 w-4/5 bg-gray-700 animate-pulse rounded"></div>
              </div>
            </div>

            {/* Button Shimmer */}
            <div className="pt-4">
              <div className="h-12 w-48 bg-gray-700 animate-pulse rounded-lg"></div>
            </div>
          </div>

          {/* Right Column Shimmer */}
          <div className="relative">
            <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl p-12 border border-gray-700/50">
              <div className="text-center space-y-8">
                {/* Main Icon Shimmer */}
                <div className="relative">
                  <div className="w-32 h-32 bg-gray-700 animate-pulse rounded-full mx-auto"></div>

                  {/* Floating Elements Shimmer */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-gray-700 animate-pulse rounded"></div>
                  <div className="absolute -top-2 -right-6 w-6 h-6 bg-gray-700 animate-pulse rounded"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gray-700 animate-pulse rounded"></div>
                  <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-gray-700 animate-pulse rounded"></div>
                </div>

                {/* Code Snippet Shimmer */}
                <div className="bg-gray-900 rounded-lg p-4 space-y-2">
                  <div className="h-4 w-32 bg-gray-700 animate-pulse rounded"></div>
                  <div className="h-4 w-40 bg-gray-700 animate-pulse rounded ml-4"></div>
                  <div className="h-4 w-48 bg-gray-700 animate-pulse rounded ml-4"></div>
                  <div className="h-4 w-36 bg-gray-700 animate-pulse rounded ml-4"></div>
                  <div className="h-4 w-8 bg-gray-700 animate-pulse rounded"></div>
                </div>

                {/* Tech Stack Icons Shimmer */}
                <div className="flex justify-center space-x-4 pt-4">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="w-12 h-12 bg-gray-700 animate-pulse rounded-lg"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Projects Section Shimmer
const ShimmerProjects = () => {
  return (
    <section className="py-24 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Shimmer */}
        <div className="text-center mb-20">
          <div className="h-12 w-48 bg-gray-700 animate-pulse rounded mx-auto mb-4"></div>
          <div className="h-6 w-96 bg-gray-700 animate-pulse rounded mx-auto"></div>
        </div>

        {/* Projects Grid Shimmer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, idx) => (
            <div
              key={idx}
              className="bg-gray-900/50 backdrop-blur-xl rounded-3xl border border-gray-700/50 p-8"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gray-700 animate-pulse rounded-2xl"></div>
                  <div className="space-y-2">
                    <div className="h-6 w-32 bg-gray-700 animate-pulse rounded"></div>
                    <div className="flex space-x-2">
                      <div className="h-4 w-16 bg-gray-700 animate-pulse rounded-full"></div>
                      <div className="h-4 w-12 bg-gray-700 animate-pulse rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2 mb-6">
                <div className="h-4 w-full bg-gray-700 animate-pulse rounded"></div>
                <div className="h-4 w-4/5 bg-gray-700 animate-pulse rounded"></div>
              </div>

              {/* Features */}
              <div className="space-y-2 mb-6">
                <div className="h-4 w-full bg-gray-700 animate-pulse rounded"></div>
                <div className="h-4 w-5/6 bg-gray-700 animate-pulse rounded"></div>
                <div className="h-4 w-3/4 bg-gray-700 animate-pulse rounded"></div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="h-6 w-16 bg-gray-700 animate-pulse rounded-full"></div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex space-x-4">
                <div className="h-10 w-24 bg-gray-700 animate-pulse rounded-lg"></div>
                <div className="h-10 w-20 bg-gray-700 animate-pulse rounded-lg"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Generic Shimmer Card Component
const ShimmerCard = ({ className = "" }) => {
  return (
    <div className={`bg-gray-800/50 rounded-lg p-6 space-y-4 ${className}`}>
      <div className="h-6 w-3/4 bg-gray-700 animate-pulse rounded"></div>
      <div className="space-y-2">
        <div className="h-4 w-full bg-gray-700 animate-pulse rounded"></div>
        <div className="h-4 w-5/6 bg-gray-700 animate-pulse rounded"></div>
        <div className="h-4 w-4/5 bg-gray-700 animate-pulse rounded"></div>
      </div>
      <div className="h-10 w-32 bg-gray-700 animate-pulse rounded-lg"></div>
    </div>
  );
};

// Export all shimmer components
export default ShimmerAbout;
export { ShimmerProjects, ShimmerCard };