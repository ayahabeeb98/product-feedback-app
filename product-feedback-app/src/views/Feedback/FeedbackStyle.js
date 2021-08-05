import styled from "styled-components";
import {BtnAdd} from "../../components/Suggestions/HeaderStyle";

export const Wrapper = styled.div`
  margin: 1.5em 1.5em 5.5em 1.5em;

  @media screen and (min-width: 768px) {
    margin: 3.5em 2.5em 7.5em;
  }

  @media screen and (min-width: 992px) {
    width: 50%;
    margin: 5em auto 8em;
  }
`;

export const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5em;
`

export const BackLink = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`

export const BackLinkText = styled.p`
  color: var(--grayish-blue);
  font-weight: bold;
  font-size: 0.8125em;
  margin-left: 1.153em;

  @media screen and (min-width: 768px) {
    font-size: 0.875em;
  }

`

export const BtnEdit = styled(BtnAdd)`
  background-color: var(--light-blue);
  min-width: 142px;
  height: 44px;
  font-size: 0.875em;

`

export const Comments = styled.div`
  margin-top: 1.5em;
  background-color: var(--white);
  padding: 1.5em;
  border-radius: 10px;
`;

export const CommentsTitle = styled.h3`
  font-size: 1.125em;
  color: var(--dark-blue);
  letter-spacing: -0.25px;
`;

export const Comment = styled.div`
  padding-bottom: 1.5em;

  position: relative;
  @media screen and (min-width: 768px) {
    padding-bottom: 2em;
  }

  &:not(:last-of-type) {
    border-bottom: 1px solid rgba(140, 146, 179, .25);
  }

  &::after {
    position: absolute;
    content: '';
    width: 1px;
    height: calc(100% - 190px);
    background-color: rgba(140, 146, 179, .25);
    left: 0;
    top: 10em;
  }

  @media screen and (min-width: 768px) {
    &::after {
      left: 1em;
      top: 4em;
    }
  }
`


export const Replay = styled.div`
  padding-left: 1.5em;
  @media screen and (min-width: 768px) {
    padding-left: 2em;
  }
`

export const User = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5em;
  margin-bottom: 1em;
`;

export const UserInfo = styled(User)`
  margin-top: 0;
  margin-bottom: 0;
`

export const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1em;
`;

export const NameWrapper = styled(User)`
  margin-top: 0;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 0;

`;

export const DisplayName = styled(BackLinkText)`
  color: var(--dark-blue);
  margin-left: 0;
`

export const UserName = styled(BackLinkText)`
  font-weight: 500;
  margin-left: 0;
`;

export const ReplayBtn = styled.a`
  font-size: 0.8125em;
  font-weight: 600;
  color: var(--light-blue);
  cursor: pointer;
`;

export const CommentContent = styled(BackLinkText)`
  font-weight: 500;
  margin-left: 0;
  @media screen and (min-width: 768px) {
    margin-left: 3.73em;
    font-size: 0.9375em;
  }

`;

export const AddCommentBox = styled(Comments)`
`;

export const CommentInput = styled.textarea`
  font-size: 0.8125em;
  padding: 1.23em;
  background: var(--background-color);
  margin-top: 1.846em;
  margin-bottom: 1.23em;
  width: 100% !important;
  display: block;
  border: 1px solid transparent;
  height: 80px;
  border-radius: 10px;
  max-height: 80px;
  resize: none;

  &::placeholder {
    color: #8C92B3;
  }
`;

export const CommentRule = styled(Banner)`
  margin-bottom: 0;
`

export const Rule = styled(CommentContent)`
  margin-left: 0;
`

export const BtnPost = styled(BtnEdit)`
  background-color: var(--purple-color);
`
