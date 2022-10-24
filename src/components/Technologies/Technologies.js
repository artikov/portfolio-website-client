import React from "react";
import { FaReact } from "react-icons/fa";
import { FiFigma, FiDatabase, FiDownloadCloud } from "react-icons/fi";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
      From Backend to Frontend all the way up to UI Design.
    </SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <FaReact size="3rem" />
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>JavaScript</ListParagraph>
          <ListParagraph>React.js</ListParagraph>
          <ListParagraph>Vue.js</ListParagraph>
          <ListParagraph>Angular</ListParagraph>
          <ListParagraph>TypeScript</ListParagraph>
          <ListParagraph>Tailwind CSS</ListParagraph>
          <ListParagraph>Bootstrap</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FiDatabase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>NodeJS</ListParagraph>
          <ListParagraph>ExpressJS</ListParagraph>
          <ListParagraph>Python</ListParagraph>
          <ListParagraph>Django</ListParagraph>
          <ListParagraph>Flask</ListParagraph>
          <ListParagraph>Jest</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FiDownloadCloud size="3rem" />
        <ListContainer>
          <ListTitle>Cloud & Database</ListTitle>
          <ListParagraph>MySQL</ListParagraph>
          <ListParagraph>GraphQL</ListParagraph>
          <ListParagraph>MongoDB</ListParagraph>
          <ListParagraph>Postgres</ListParagraph>
          <ListParagraph>AWS</ListParagraph>
          <ListParagraph>Firebase</ListParagraph>
          <ListParagraph>Google Cloud Platform</ListParagraph>
          <ListParagraph>Microsoft Azure</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FiFigma size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>Figma</ListParagraph>
          <ListParagraph>Sketch</ListParagraph>
          <ListParagraph>Webflow</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
