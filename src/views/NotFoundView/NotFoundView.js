import errorImage from '../../images/pageNotFound.png';
//import s from './NotFoundView.module.css';
import {Main, Image, Title} from './NotFoundView.styled';

export default function NotFoundView() {
  return (
    <Main role="alert">
      <Image src={errorImage} width="650" alt="Error" />
      <Title>Page not found 😨</Title>
    </Main>
  );
}