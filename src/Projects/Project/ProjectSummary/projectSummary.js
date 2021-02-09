import React from "react";
import styled from "styled-components";

const SummaryContainer = styled.div``;
const Header = styled.h4`
  text-align: center;
`;

const Summary = styled.p`
  margin: 10px 10px;
`;

const Icon = styled.i`
  ${SummaryContainer}:hover & {
    display: inline-block;
  }
  font-size: 40px;
  display: none;
  margin: 0 auto;
`;

const WebPage = styled(Icon)``;

const GitHub = styled(Icon)``;

const ProjectSummary = () => {
  return (
    <SummaryContainer>
      <Header>Etch-a-sketch</Header>
      {/* <Summary>
        Based on the classical toy, here is a web version of it.
      </Summary> */}
      <span>
        <WebPage className="fas fa-desktop" />
      </span>

      <GitHub className="fab fa-github" />
    </SummaryContainer>
  );
};

export default ProjectSummary;
