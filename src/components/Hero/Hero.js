import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, I am Jamal, <br />A Software Engineer
      </SectionTitle>
      <SectionText>
        I am a Full-Stack developer with over 7 years of professional
        experience.
      </SectionText>
      {/* //Change this */}
      <Button onClick={() => (window.location = "https://google.com")}>
        Get To Know More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
