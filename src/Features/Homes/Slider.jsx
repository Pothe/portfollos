import Row from "../../Components/Row";

function Slider() {
  return (
    <div className="w-[980px]">
      <h2 className="py-20 px-2 font-bold text-6xl text-blue-500">
        10+ Years Delivering Resileint IT Infrastructure, Moderm Web Development
        & Intuitive Digital Design
      </h2>
      <div className="p-2 mb-2 rounded-2xl border-2 border-blue-400">
        <p className="text-3xl font-semibold text-shadow-white">
          A hybrid technologist bridging enterprise IT systems administration ,
          end-to-end full-stack web engineering, and human-centered UI/Ux
          design. Delivering bulletproof workstation and clould workflows
          alongside high-speed digital products for over a decade
        </p>
      </div>
      <Row>
        <button className="py-3 px-2 bg-blue-400 rounded-2xl hover:bg-blue-300 ">
          Explore 10+ Years Experiences
        </button>
        <button className="py-3 px-2 bg-blue-400 rounded-2xl hover:bg-blue-300 ">
          Explore 10+ Years Experiences
        </button>
      </Row>
    </div>
  );
}

export default Slider;
