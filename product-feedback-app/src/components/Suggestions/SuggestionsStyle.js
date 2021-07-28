import styled from 'styled-components';

export const SuggestionWrapper = styled.div`
  margin: 2em auto;
  width: 90%;
  background-color: var(--white);
  border-radius: 10px;
  padding: 4.75em 1.5em;
  text-align: center;
  
  @media screen and (min-width: 768px) {
    margin: 2em 0;
    width: 100%;
  }

`;

export const SuggestionsTitle = styled.h3`
      font-weight: 700;
      font-size: 1.125em;
      margin-top: 2.16em;
      margin-bottom: .77em;
      color: var(--dark-blue);
`;

export const SuggestionsText = styled.p`
      font-size: 0.8125em;
      color: var(--grayish-blue);
      margin-bottom: 1.5em;
      
       @media screen and (min-width: 768px) {
          max-width: 60%;
          font-size: 1em;
          margin: 0 auto 1.5em auto;
       }
`;
