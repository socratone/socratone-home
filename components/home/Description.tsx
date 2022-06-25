import styled from '@emotion/styled';

interface IDescription {
  children: string;
  style?: React.CSSProperties;
}

const StyledDescription = styled.p`
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;
  color: #333;
`;

const Description: React.FC<IDescription> = ({ children, style }) => {
  return <StyledDescription style={style}>{children}</StyledDescription>;
};

export default Description;
