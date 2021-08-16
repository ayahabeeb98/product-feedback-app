import styled from 'styled-components';

export const SpinnerWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--light-gray);
`;

export const Spinner = styled.div`
  width: 50px;
  height: 40px;
  text-align: center;
  font-size: 10px;
`;

export const Rectangle = styled.div`
  background-color: var(--dark-blue);
  height: 100%;
  width: 6px;
  display: inline-block;
  margin: 0 2px;
  -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
  animation: sk-stretchdelay 1.2s infinite ease-in-out;

  @-webkit-keyframes sk-stretchdelay {
    0%, 40%, 100% { -webkit-transform: scaleY(0.4) }
    20% { -webkit-transform: scaleY(1.0) }
  }

  @keyframes sk-stretchdelay {
    0%, 40%, 100% {
      transform: scaleY(0.4);
      -webkit-transform: scaleY(0.4);
    }  20% {
         transform: scaleY(1.0);
         -webkit-transform: scaleY(1.0);
       }
  }
`;

export const Rectangle1 = styled(Rectangle)`
`;

export const Rectangle2 = styled(Rectangle)`
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
`;

export const Rectangle3 = styled(Rectangle)`
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
`

export const Rectangle4 = styled(Rectangle)`
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
`;

export const Rectangle5 = styled(Rectangle)`
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
`;

