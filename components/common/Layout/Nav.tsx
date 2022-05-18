import styled from '@emotion/styled';
import NavButton from './NavButton';

const Nav = () => {
  return (
    <Container>
      <NavButton path="/">Home</NavButton>
      <NavButton path="/resume">Resume</NavButton>
    </Container>
  );
};

const Container = styled.nav``;

export default Nav;
