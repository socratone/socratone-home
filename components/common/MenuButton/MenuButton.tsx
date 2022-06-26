import styled from '@emotion/styled';

interface IMenuButtonProps {
  open?: boolean;
  color?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const StyledMenuButton = styled.button`
  border: 0;
  background: transparent;
  cursor: pointer;
  width: 60px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  outline: none;
`;

const LineContainer = styled.div`
  position: relative;
  width: 20px;
  height: 20px;

  @keyframes rotate-button {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(180deg);
    }
  }

  @keyframes reverse-rotate-button {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(-360deg);
    }
  }
`;

const TopLine = styled.div`
  height: 2px;
  background: #000;
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(calc(-50% - 5px)) rotate(0);

  @keyframes rotate-line-2 {
    from {
      transform: translateY(calc(-50% - 5px)) rotate(0);
    }

    to {
      transform: translateY(-50%) rotate(-45deg);
    }
  }

  @keyframes reverse-rotate-line-2 {
    from {
      transform: translateY(-50%) rotate(-45deg);
    }

    to {
      transform: translateY(calc(-50% - 5px)) rotate(0);
    }
  }
`;

const BottomLine = styled.div`
  height: 2px;
  background: #000;
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(calc(-50% + 5px)) rotate(0);

  @keyframes rotate-line-1 {
    from {
      transform: translateY(calc(-50% + 5px)) rotate(0);
    }

    to {
      transform: translateY(-50%) rotate(45deg);
    }
  }

  @keyframes reverse-rotate-line-1 {
    from {
      transform: translateY(-50%) rotate(45deg);
    }

    to {
      transform: translateY(calc(-50% + 5px)) rotate(0);
    }
  }
`;

const CenterLine = styled.div`
  height: 2px;
  background: #000;
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%) scaleX(1);

  @keyframes narrow-line-3 {
    from {
      transform: translateY(-50%) scaleX(1);
    }

    to {
      transform: translateY(-50%) scaleX(0);
    }
  }

  @keyframes wide-line-3 {
    from {
      transform: translateY(-50%) scaleX(0);
    }

    to {
      transform: translateY(-50%) scaleX(1);
    }
  }
`;

const MenuButton: React.FC<IMenuButtonProps> = ({ open, color, onClick }) => {
  const containerAnimation = () => {
    if (open === undefined) return undefined;
    if (open === true) return '.3s rotate-button forwards';
    return '.5s reverse-rotate-button forwards';
  };

  const topLineAnimation = () => {
    if (open === undefined) return undefined;
    if (open === true) return '.3s rotate-line-2 .2s forwards';
    return '.5s reverse-rotate-line-2 forwards';
  };

  const bottomLineAnimation = () => {
    if (open === undefined) return undefined;
    if (open === true) return '.3s rotate-line-1 .2s forwards';
    return '.5s reverse-rotate-line-1 forwards';
  };

  const centerLineAnimation = () => {
    if (open === undefined) return undefined;
    if (open === true) return '.3s narrow-line-3 .2s forwards';
    return '.5s wide-line-3 forwards';
  };

  return (
    <StyledMenuButton onClick={onClick}>
      <LineContainer
        style={{
          animation: containerAnimation(),
        }}
      >
        <TopLine
          style={{
            animation: topLineAnimation(),
            background: color,
          }}
        />
        <BottomLine
          style={{
            animation: bottomLineAnimation(),
            background: color,
          }}
        />
        <CenterLine
          style={{
            animation: centerLineAnimation(),
            background: color,
          }}
        />
      </LineContainer>
    </StyledMenuButton>
  );
};

export default MenuButton;
