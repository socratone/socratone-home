import styled from '@emotion/styled';
import { useRouter } from 'next/router';

interface NavButtonProps {
  path: string;
  children: string;
}

const NavButton = ({ path, children }: NavButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(path);
  };

  return (
    <Button onClick={handleClick} selected={router.pathname === path}>
      {children}
    </Button>
  );
};

const Button = styled.button<{ selected?: boolean }>`
  display: flex;
  align-items: center;
  height: 27px;
  font-size: 14px;
  font-weight: 500;
  width: 100%;
  padding: 0 14px;
  background: ${(props) =>
    props.selected ? 'rgba(55, 53, 47, 0.08)' : 'transparent'};
  color: ${(props) => (props.selected ? '#37352f' : '#19171199')};
  cursor: pointer;

  :hover {
    background: rgba(55, 53, 47, 0.08);
  }

  :active {
    background: rgba(203, 202, 199);
  }
`;

export default NavButton;
