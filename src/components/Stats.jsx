const Stats = () => {
  return (
    <section className="w-full bg-purple-600 py-12">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-0">
        
        {/* Stat 1 */}
        <div className="flex-1 flex flex-col items-center text-white py-4">
          <h2 className="text-5xl font-extrabold">50K+</h2>
          <p className="text-lg mt-2 text-purple-100">Active Users</p>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-16 bg-purple-400"></div>

        {/* Stat 2 */}
        <div className="flex-1 flex flex-col items-center text-white py-4">
          <h2 className="text-5xl font-extrabold">200+</h2>
          <p className="text-lg mt-2 text-purple-100">Premium Tools</p>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-16 bg-purple-400"></div>

        {/* Stat 3 */}
        <div className="flex-1 flex flex-col items-center text-white py-4">
          <h2 className="text-5xl font-extrabold">4.9</h2>
          <p className="text-lg mt-2 text-purple-100">Rating</p>
        </div>

      </div>
    </section>
  );
};

export default Stats;
