import React from "react";

import {cv} from '../../constants/constants'
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
      <a href={cv.cv} download>
        <Button>
          Get My Resume
        </Button>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;
