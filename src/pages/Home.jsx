import Row from "../Components/Row";

import Section from "../Components/Section";
import Slider from "../Features/Homes/Slider";

function Home() {
  return (
    <div className="w-[80%] mx-auto flex py-5">
      <Section>
        <Row className="flex flex-col  md:flex-row sm:flex-row items-center justify-between gap-8 ">
          <Slider />

          <div className="py-5 flex-shrink-2">
            <div className="overflow-hidden rounded-full w-64 h-64 md:w-150 md:h-150 mx-auto">
              <img
                src="https://cdn.thenewstack.io/media/2026/03/dd8b4ddc-dina-gazizova-tvbofummco8-unsplash-1-1024x1024.jpg"
                alt="Profile"
                className="w-full h-full object-center"
              />
            </div>
          </div>
        </Row>
      </Section>
    </div>
  );
}

export default Home;
