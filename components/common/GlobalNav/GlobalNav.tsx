import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { border } from '../../../constants/color';
import { mobileGlobalNavHeight } from '../../../constants/size';
import GlobalNavItem from '../GlobalNavItem';
import MenuButton from '../MenuButton';

const StyledGlobalNav = styled.div`
  z-index: 10;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  top: 15px;
  right: 0;
  height: 50px;

  @media only screen and (max-width: 600px) {
    top: 0;
    width: 100%;
    height: ${mobileGlobalNavHeight}px;
    background: #fff;
    border-bottom: 1px solid ${border};
  }
`;

const StyledAside = styled.aside<{ open: boolean }>`
  position: absolute;
  z-index: 30;
  top: calc(100% + 10px);
  right: 0;
  background-color: white;
  border: 1px solid ${border};
  border-top-left-radius: 5px;
  border-end-start-radius: 5px;
  width: 240px;
  min-height: 400px;
  padding: 4px;
  box-shadow: rgb(0 0 0 / 8%) 0 3px 10px 0;
  transition: all 0.3s;
  transform: ${({ open }) => (open ? 'translateX(0%)' : 'translateX(100%)')}; ;
`;

const GlobalNav = () => {
  const [open, setOpen] = useState<boolean>();

  useEffect(() => {
    const handleClickOut = () => {
      setOpen(false);
    };

    if (open) {
      document.body.addEventListener('click', handleClickOut);
    }

    return () => {
      document.body.removeEventListener('click', handleClickOut);
    };
  }, [open]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setOpen((open) => !open);
  };

  return (
    <StyledGlobalNav>
      <MenuButton open={open} onClick={handleClick} />
      <StyledAside open={!!open} onClick={(event) => event.stopPropagation()}>
        <GlobalNavItem path="/">Home</GlobalNavItem>
        <GlobalNavItem path="/resume">Resume</GlobalNavItem>
      </StyledAside>
    </StyledGlobalNav>
  );
};

export default GlobalNav;
