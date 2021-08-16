import styled from "styled-components";
import {FloatingComments, SuggestionBoxText, VoteBtn} from "../../components/Suggestions/SuggestionsStyle";

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
  
  &:hover {
    color: var(--very-dark-blue);
  }
  
  &:first-letter {
    text-transform: capitalize;
  }

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
  &:first-letter {
    text-transform: capitalize;
  }
  

  @media screen and (min-width: 768px) {
    font-size: 0.875em;
  }

  @media screen and (min-width: 992px) {
    font-size: 1em;
  }
`;

export const StatusGroups = styled.div`
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

export const StatusGroup = styled.div`
  display: ${props => props.active ? 'block' : 'none'};
  
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const StatusBox = styled.div`
  background-color: var(--white);
  border-radius: 10px;
  width: 100%;
  height: 233px;
  position: relative;
  padding: 1em 1.5em 1.5em;
  --status: ${props=> props.status === 'planned' ? 'var(--planned-color)' : 
          props.status === 'live' ? 'var(--very-light-blue)' : 'var(--purple-color)'};
  border-top: 6px solid var(--status);
  
  &:not(:last-of-type) {
    margin-bottom: 1em;
  }

  &:first-of-type {
    margin-top: 1.5em;
  }

  @media screen and (min-width: 768px) {
    //height: 251px;
    height: unset;
    padding: 1.25em;
    &:not(:last-of-type) {
      margin-bottom: 1.5em;
    }
    &:first-of-type {
      margin-top: 2em;
    }
  }

  @media screen and (min-width: 992px) {
    //height: 272px;
    padding: 1.625em 2em 2em;
  }
`;

export const Circle = styled.span`
  width: 8px;
  height: 8px;
  background-color: var(--status);
  display: block;
  border-radius: 50%;
  margin-right: 1em;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1em;
  @media screen and (min-width: 768px) {
    margin-bottom: .5em;

  }

`;

export const CardFooter = styled(TitleWrapper)`
  justify-content: space-between;
  margin-bottom: 0;
  margin-top: 1em;
`;

export const CommentCount = styled(FloatingComments)`
  position: relative;
  margin: 0;
`;

export const VoteButton = styled(VoteBtn)`
  height: 2.46em;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 69px;
    height: 40px;
    padding: 5px 1em;
    margin: 0;
  }
`

export const SuggestionContent = styled(SuggestionBoxText)`
  @media screen and (min-width: 768px){
    font-size: 0.8125em;
    margin-bottom: 1.846em;
  }
  
  @media screen and (min-width: 992px){
    margin-bottom: 1.23em;
  }
`;

export const TabNav = styled.nav`
  display: flex;
  border-bottom: 1px solid #8C92B3;
  justify-content: space-around;
  @media screen and (min-width: 768px){
    display: none;
  }
`;

export const TabLink = styled.a`
  font-size: 0.8125em;
  font-weight: bold;
  color: ${props => props.active ? 'var(--dark-blue)' : 'var(--grayish-blue)'}; 
  //min-width: 125px;
  width: 33%;
  padding: 1.4em 0;
  text-align: center;
  position: relative;
  
  &:first-letter {
    text-transform: capitalize;
  }
  
  &:after {
    content: '';
    height: 4px;
    background-color: var(--purple-color);
    width: 100%;
    display: ${props => props.active ? 'block' : 'none'}; ;
    position: absolute;
    bottom: 0;
  }
`;