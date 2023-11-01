import * as S from './styles';

export type MainProps = {
  children: React.ReactNode;
};

const Main = ({ children }: MainProps) => (
  <S.Container>
    <S.Content>{children}</S.Content>
  </S.Container>
);

export default Main;
