import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { border } from '../../../constants/color';

interface GlobalNavItemProps {
  path: string;
  children: string;
}

const StyledGlobalNavItem = styled.button<{ selected?: boolean }>`
  display: flex;
  align-items: center;
  height: 27px;
  font-size: 14px;
  font-weight: 500;
  width: 100%;
  padding: 0 14px;
  background: ${(props) => (props.selected ? border : 'transparent')};
  color: ${(props) => (props.selected ? '#37352f' : '#19171199')};
  cursor: pointer;
  border-radius: 3px;

  :hover {
    background: ${border};
  }

  :active {
    background: rgba(203, 202, 199);
  }
`;

const GlobalNavItem = ({ path, children }: GlobalNavItemProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(path);
  };

  return (
    <StyledGlobalNavItem
      onClick={handleClick}
      selected={router.pathname === path}
    >
      {children}
    </StyledGlobalNavItem>
  );
};

export default GlobalNavItem;
