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