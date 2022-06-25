import styled from '@emotion/styled';

interface IHeading {
  children: string;
  style?: React.CSSProperties;
}

const StyledHeading = styled.h1`
  font-weight: 600;
  font-size: 32px;
`;

const Heading: React.FC<IHeading> = ({ children, style }) => {
  return <StyledHeading style={style}>{children}</StyledHeading>;
};

export default Heading;
