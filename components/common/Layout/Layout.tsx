import styled from '@emotion/styled';
import Nav from './Nav';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Aside>
        <Nav />
      </Aside>
      <Main>{children}</Main>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const Aside = styled.aside`
  width: 240px;
  flex-shrink: 0;
  background: #f7f6f3;
`;

const Main = styled.main`
  flex-grow: 1;
  padding: 10px;
  color: #37352f;
`;

export default Layout;
