import { IoMdContact } from "react-icons/io";
import { IoArrowDownOutline } from "react-icons/io5";

function Slider() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 sm:py-12 md:py-16">
      <h2 className="font-bold text-3xl sm:text-5xl md:text-6xl text-blue-500 leading-tight mb-6 md:mb-8 text-center sm:text-left">
        10+ Years Delivering Resilient IT Infrastructure, Modern Web Development
        &amp; Intuitive Digital Design
      </h2>

      <div className="mb-8">
        <p className="text-lg sm:text-2xl md:text-3xl font-semibold text-gray-800 leading-relaxed text-center sm:text-left">
          A hybrid technologist bridging enterprise IT systems administration,
          end-to-end full-stack web engineering, and human-centered UI/UX
          design. Delivering bulletproof workstation and cloud workflows
          alongside high-speed digital products for over a decade.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center sm:justify-start items-center">
        <button className="w-full sm:w-auto py-3 px-6 flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-2xl transition-colors">
          <span>Explore 10+ Years Experience</span>
          <IoArrowDownOutline className="text-xl" />
        </button>

        <button className="w-full sm:w-auto py-3 px-6 flex items-center justify-center gap-2 bg-blue-400 hover:bg-blue-500 text-white font-medium rounded-2xl transition-colors">
          <span>Contact Direct</span>
          <IoMdContact className="text-xl" />
        </button>
      </div>
    </div>
  );
}

export default Slider;
