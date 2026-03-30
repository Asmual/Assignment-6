import bannerImg from "../assets/banner.png";
import playIcon from "../assets/Play.png";
import activeImg from "../assets/active.png";

const Banner = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">

        <div className="flex-1 flex flex-col gap-6">

          <div className="inline-flex items-center gap-2 bg-[#E1E7FF] border border-purple-200 text-purple-700 text-sm font-medium px-4 py-2 rounded-full w-fit">
            <img src={activeImg} alt="activeimg" />
            New: AI-Powered Tools Available
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Supercharge Your <br /> Digital Workflow
          </h1>

          <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-lg">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
            Explore Products
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <button className="bg-purple-700 hover:bg-purple-600 text-white font-semibold px-7 py-3 rounded-full transition-colors text-sm md:text-base">
              Explore Products
            </button>
            <button className="flex items-center gap-2 border-[1.7px] border-purple-400 hover:border-purple-800 text-purple-700 font-semibold px-7 py-3 rounded-full transition-colors text-sm md:text-base">
              <img src={playIcon} alt="" />
              Watch Demo
            </button>
          </div>
        </div>

        <div className="flex-1 w-full">
          <div className="rounded-2xl overflow-hidden shadow-lg w-full aspect-video md:aspect-4/3">
            <img
              src={bannerImg}
              alt="Digital Tools Workflow"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;