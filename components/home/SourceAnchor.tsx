import styled from '@emotion/styled';

interface ISourceAnchor {
  children: string;
  href: string;
  title: string;
  style?: React.CSSProperties;
}

const StyledSourceAnchor = styled.p`
  font-weight: 300;
  font-size: 12px;
  color: #999;
  line-height: 18px;
`;

const StyledAnchor = styled.a``;

const SourceAnchor: React.FC<ISourceAnchor> = ({
  children,
  href,
  title,
  style,
}) => {
  return (
    <StyledSourceAnchor>
      <StyledAnchor href={href} title={title} style={style}>
        {children}
      </StyledAnchor>
    </StyledSourceAnchor>
  );
};

export default SourceAnchor;
