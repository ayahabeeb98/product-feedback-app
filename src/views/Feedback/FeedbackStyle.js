import styled from "styled-components";
import {BtnAdd} from "../../components/Suggestions/HeaderStyle";

export const Wrapper = styled.div`
  margin: 1.5em 1.5em 5.5em 1.5em;

  @media screen and (min-width: 768px) {
    margin: 3.5em 2.5em 7.5em;
  }

  @media screen and (min-width: 1099px) {
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
  transition: all 300ms ease-in-out;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (min-width: 768px) {
    font-size: 0.875em;
  }

`

export const BtnEdit = styled(BtnAdd)`
  background-color: var(--light-blue);
  min-width: 142px;
  height: 44px;
  font-size: 0.875em;
  transition: all 300ms ease-in-out;

  &:hover {
    background-color: #7C91F9;
  }

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
    height: ${props => props.hasReplies ? 'calc(100% - 190px)' : '0'};
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

  &:hover {
    text-decoration: unset;
  }

`

export const UserName = styled(BackLinkText)`
  font-weight: 500;
  margin-left: 0;

  &:hover {
    text-decoration: unset;
  }

`;

export const ReplayBtn = styled.a`
  font-size: 0.8125em;
  font-weight: 600;
  color: var(--light-blue);
  cursor: pointer;
  transition: all 300ms ease-in-out;

  &:hover {
    text-decoration: underline;
  }

`;

export const CommentContent = styled(BackLinkText)`
  font-weight: 500;
  margin-left: 0;
  word-break: break-word;
  
  &:hover {
    text-decoration: unset;
  }
  
  @media screen and (min-width: 768px) {
    margin-left: 3.73em;
    font-size: 0.9375em;
  }

`;

export const ReplyingTo = styled.span`
  color: var(--purple-color);
  font-weight: bold;
`;

export const AddCommentBox = styled(Comments)`
`;

export const CommentInput = styled.textarea`
  font-size: 0.8125em;
  padding: 1.23em;
  background: var(--background-color);
  margin-top: 1.846em;
  width: 100% !important;
  display: block;
  height: 80px;
  border-radius: 10px;
  max-height: 80px;
  resize: none;
  color: var(--dark-blue);
  border-color: ${props => props.error ? "var(--red-color)" : "transparent"};
  margin-bottom: ${props => props.error ? "4px" : "1.23em"};
  &::placeholder {
    color: #8C92B3;
  }

  &:hover,
  &:focus {
    border-color: var(--light-blue);
    outline: var(--light-blue);
  }
`;

export const CommentRule = styled(Banner)`
  margin-bottom: 0;
`

export const Rule = styled(CommentContent)`
  margin-left: 5px;
`
export const RuleBreak = styled(CommentContent)`
      color: var(--white);
      background-color: var(--red-color);
`;

export const BtnPost = styled(BtnEdit)`
  background-color: var(--purple-color);

  &:hover {
    background-color: #C75AF6;
  }
`

export const ReplayForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
  margin-top: 1.5em;
  transform: ${props => props.replayOpen ? "translateY(0)" : "translateY(-100)"};
  opacity: ${props => props.replayOpen ? "1" : "0"};
  transition: all 300ms ease-in-out;
  
  @media screen and (min-width: 768px) {
    margin-left: 3.5em;
    flex-direction: row;
  }
`;

export const ReplyInput = styled(CommentInput)`
  @media screen and (min-width: 768px) {
    max-width: 70%;
    font-size: 0.9375em;
    margin-right: 1.066em;
    margin-top: 0;
    margin-bottom: 0;
  }

`;

export const BtnReplay = styled(BtnAdd)`
  max-width: 100%;
  height: 44px;

  @media screen and (min-width: 768px) {
    max-width: 117px;

  }
`

//Add feedback Page Style

export const PageWrapper = styled.div`
  margin: 2.125em 1.5em 4.75em;

  @media screen and (min-width: 768px) {
    margin: 3.5em 7.125em 13.9375em;
  }

  @media screen and (min-width: 992px) {
    margin: 5.75em auto 11.6875em;
    max-width: 540px;
  }


`

export const FormWrapper = styled.form`
  background-color: var(--white);
  position: relative;
  padding: 2.75em 1.5em 1.5em;
  border-radius: 10px;
  margin-top: 3.5em;

  @media screen and (min-width: 768px) {
    padding: 3.25em 2.625em 2.5em;
    margin-top: 4.25em;
  }
`;

export const FloatingCircle = styled.div`
  position: absolute;
  top: ${props => props.edit ? '-2%' : '-3%'};
  left: 1.5em;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 56px;
    height: 56px;
    left: 2.6em;
    top: -4%;
  }
`;

export const FormHeading = styled(CommentsTitle)`
  margin-bottom: 1.333em;
  @media screen and (min-width: 768px) {
    font-size: 1.5em;
    margin-bottom: 1.666em;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5em;
  position: relative;

  &:nth-child(5) {
    margin-bottom: 2.5em;
  }

  @media screen and (min-width: 768px) {
    &:nth-child(5) {
      margin-bottom: 2em;
    }
  }
`;

export const FormLabel = styled.label`
  font-size: 0.8125em;
  color: var(--dark-blue);
  letter-spacing: -0.18px;
  font-weight: bold;
  margin-bottom: 3px;

  @media screen and (min-width: 768px) {
    font-size: .875em;
  }

`;

export const InputHint = styled.p`
  font-size: 0.8125em;
  color: var(--grayish-blue);
  font-weight: 500;
  letter-spacing: 0;
  margin-bottom: 1.23em;
  @media screen and (min-width: 768px) {
    font-size: .875em;
  }
`;


export const FormControl = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 5px;
  background-color: var(--background-color);
  transition: all 300ms ease-in-out;
  color: var(--dark-blue);
  padding: 0 1.5em;

  &:hover,
  &:focus {
    border-color: var(--light-blue);
    outline: var(--light-blue);
  }
`;

export const SelectOption = styled.button`
  width: 100%;
  height: 48px;
  font-size: 0.8125em;
  padding: 0 16px;
  border-radius: 5px;
  color: var(--dark-blue);
  background-color: var(--background-color);
  cursor: pointer;
  border: 1px solid transparent;
  text-align: left;
  position: relative;
  text-transform: capitalize;
  transition: all 300ms ease-in-out;

  &::after {
    content: '';
    width: 8px;
    height: 8px;
    border-width: 0 0 2px 2px;
    border-style: solid;
    border-color: var(--very-dark-blue);
    transform: ${props => props.open ? "rotate(135deg)" : "rotate(315deg)"};
    position: absolute;
    right: 1.5em;
    top: 40%;
  }

  &:hover {
    border-color: var(--light-blue);
  }

`;

export const CategoriesList = styled.ul`
  background-color: var(--white);
  margin-top: 1em;
  border-radius: 10px;
  box-shadow: 0 10px 40px -7px rgba(55, 63, 104, .35);
  position: absolute;
  top: calc(100% - 80);
  left: 0;
  z-index: 11;
  width: 100%;
`;


export const FeedbackBox = styled(CommentInput)`
  height: 120px;
  transition: all 300ms ease-in-out;
  border-color: ${props => props.error ? "var(--red-color)" : "transparent"};
  margin-bottom: ${props => props.error ? "4px" : "1.23em"};



  @media screen and (min-width: 768px) {
    height: 96px;
  }
`;

export const ErrorMsg = styled.p`
  color: var(--red-color);
  font-size: 0.875em;

`;

export const BtnsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
  
  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }
`;

export const FormBtn = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  font-size: 0.8125em;
  color: var(--white);
  font-weight: bold;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 300ms ease-in-out;

  @media screen and (min-width: 768px) {
    height: 44px;
    display: inline-block;
    font-size: 0.875em;
  }
`;


export const FormBtnAdd = styled(FormBtn)`
  background-color: var(--purple-color);
  margin-bottom: 1.23em;

  &:hover {
    background-color: #C75AF6;
  }

  @media screen and (min-width: 768px) {
    max-width: 144px;
    margin-bottom: 0;
    margin-left: 1.142em;
  }
`;

export const FormCancel = styled(FormBtn)`
  background-color: var(--dark-blue);

  &:hover {
    background-color: #656EA3;
  }


  @media screen and (min-width: 768px) {
    max-width: 93px;
  }
`;

export const FormDelete = styled(FormBtn)`
  background-color: var(--red-color);
  margin-top: 1.23em;
  position: unset;
  
  &:hover {
    background-color: #E98888;
  }
  
  @media screen and (min-width: 768px) {
    margin-top: 0;
    max-width: 93px;
    position: absolute;
    left: 0;

  }
`;
