import styled from 'styled-components';

export const SuggestionWrapper = styled.div`
  margin: 2em auto 2.9em;
  width: 90%;
  background-color: var(--white);
  border-radius: 10px;
  padding: 4.75em 1.5em;
  text-align: center;

  @media screen and (min-width: 768px) {
    margin: 1.5em 0 3.375em;
    width: 100%;
    padding: 6.875em 8.75em;
  }

  @media screen and (min-width: 992px) {
    padding: 6.875em 13em;
    margin-bottom: 0;
  }


`;

export const SuggestionsTitle = styled.h3`
  font-weight: 700;
  font-size: 1.125em;
  margin-top: 2.16em;
  margin-bottom: .77em;
  color: var(--dark-blue);
  @media screen and (min-width: 768px) {
    font-size: 1.5em;
    margin-top: 2.219em;
    margin-bottom: .66em;
  }
`;

export const SuggestionsText = styled.p`
  font-size: 0.8125em;
  color: var(--grayish-blue);
  margin-bottom: 1.5em;

  @media screen and (min-width: 768px) {
    font-size: 1em;
    margin: 0 auto 3em auto;
  }
`;

export const SuggestionBox = styled.div`
  background-color: var(--white);
  padding: 1.5em;
  margin-bottom: 1em;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  border-radius: 10px;
  margin-left: ${props=> props.details ? 'auto' : '.75em'};
  margin-right: ${props=> props.details ? 'auto' : '.75em'};

  @media screen and (min-width: 370px) {
    margin-left: ${props=> props.details ? 'auto' : '1.5em'};
    margin-right: ${props=> props.details ? 'auto' : '1.5em'};
  }
  
  @media screen and (min-width: 768px) {
    max-width: unset;
    padding: 1.75em 2em;
    flex-direction: row;
    max-height: 151px;
    margin-bottom: 1.25em;
    margin-left: auto;
    margin-right: auto;
  }
`

export const VoteBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8125em;
  border-radius: 10px;
  background-color: var(--light-gray);
  border: 0;
  cursor: pointer;
  margin-top: 0.842em;
  width: 5.307em;
  height: 2.46em;
  &:hover {
    background-color: #CFD7FF;
  }
  
  @media screen and (min-width: 768px) {
    margin-right: 3.0769em;
    flex-direction: column;
    width: 3.077em;
    padding-top: 1.076em;
    justify-content: space-between;
    padding-bottom: 0.715em;
    height: 4.077em;
    margin-top: 0;
  }
`
export const VoteAmount = styled.span`
  color: var(--dark-blue);
  font-weight: bold;
  margin-left: 0.769em;
  @media screen and (min-width: 768px) {
    margin-left: 0;
  }
`

export const SuggestionBoxTitle = styled(SuggestionsTitle)`
  margin-top: 0;
  margin-bottom:1.09em;
  font-size: 0.8125em;

  @media screen and (min-width: 768px) {
    font-size: ${props => props.inner ? '0.8125em' : '1.125em'};
    margin-bottom: 0.9em;
  }
  
  @media screen and (min-width: 992px) {
    font-size: 1.125em;
  }
`

export const SuggestionBoxText = styled(SuggestionsText)`
  margin-top: 0;
  margin-bottom: 0.615em;

  @media screen and (min-width: 768px) {
    margin-bottom: 0.75em;
  }
`

export const FloatingComments = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 1.5em;
  margin-bottom: 1.5em;

  @media screen and (min-width: 768px) {
    margin-right: 2em;
    bottom: 41%;
    margin-bottom: 0;
  }
`

export const CommentsNumber = styled(VoteAmount)`
  margin-left: 0.615em;
  @media screen and (min-width: 768px) {
    margin-left: 1em;
  }
`