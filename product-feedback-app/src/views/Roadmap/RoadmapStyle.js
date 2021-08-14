import styled from "styled-components";

export const RoadmapContainer = styled.main`
  @media screen and (min-width: 768px) {
    margin: 3.5em 2.5em;

  }
  @media screen and (min-width: 992px) {
    margin: 4.875em 10.3125em;
  }
`;

export const RoadmapHeader = styled.header`
  background-color: var(--navbar-color);
  color: var(--light-gray);
  padding: 1.625em 1.5em;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    border-radius: 10px;
    margin-bottom: 2em;
    padding: 1.6875em 2em;
    height: 113px;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 77px;
  color: var(--white);
`;

export const BackText = styled.p`
  font-weight: bold;
  font-size: 0.8125em;
`;

export const PageHeading = styled.h1`
  font-size: 1.125em;
  margin-top: 0.2em;

  @media screen and (min-width: 768px) {
    font-size: 1.5em;
  }
`;

export const StatusHeading = styled.h3`
  font-size: 1.125em;
  color: var(--dark-blue);
  margin-bottom: .3em;

  @media screen and (min-width: 768px) {
    font-size: 0.875em;
  }

  @media screen and (min-width: 992px) {
    font-size: 1.125em;
  }
`;

export const StatusSubTitle = styled.p`
  font-size: 0.8125em;
  color: var(--grayish-blue);

  @media screen and (min-width: 768px) {
    font-size: 0.875em;
  }

  @media screen and (min-width: 992px) {
    font-size: 1em;
  }
`;

export const StatusGroup = styled.div`
  padding: 1.5em;
  display: grid;
  grid-row-gap: 1em;

  @media screen and (min-width: 768px) {
    padding: 0;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1em 0.625em;
  }

  @media screen and (min-width: 992px) {
    grid-gap: 1.5em 1.875em;
  }
`;

export const StatusBox = styled.div`
  background-color: var(--white);
  border-radius: 10px;
  width: 100%;
  height: 233px;

`;