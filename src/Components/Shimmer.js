const ShimmerAbout = () => {
  return (
    <section className="py-24 px-6 bg-black relative overflow-hidden animate-pulse">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-8">
        <div className="h-10 w-1/3 bg-gray-700 rounded-lg mx-auto"></div>
        <div className="h-1 w-24 bg-gray-700 mx-auto rounded"></div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="h-6 bg-gray-700 rounded w-3/4"></div>
            <div className="h-4 bg-gray-700 rounded w-full"></div>
            <div className="h-4 bg-gray-700 rounded w-5/6"></div>

            <div className="h-6 bg-gray-700 rounded w-1/2 mt-8"></div>
            <div className="h-4 bg-gray-700 rounded w-5/6"></div>

            <div className="h-6 bg-gray-700 rounded w-1/2 mt-8"></div>
            <div className="h-4 bg-gray-700 rounded w-full"></div>

            <div className="h-6 bg-gray-700 rounded w-1/2 mt-8"></div>
            <div className="h-4 bg-gray-700 rounded w-4/5"></div>

            <div className="w-48 h-12 mt-6 bg-gray-700 rounded-lg"></div>
          </div>

          {/* Right Column */}
          <div className="h-96 bg-gray-800 rounded-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default ShimmerAbout;