import Row from "../Components/Row";

import Section from "../Components/Section";
import Slider from "../Features/Homes/Slider";

function Home() {
  return (
    <div className="w-[80%] mx-auto flex ">
      <Section>
        <Row>
          <Slider />
          <div>alsdflasdjf</div>
        </Row>
      </Section>
    </div>
  );
}

export default Home;
