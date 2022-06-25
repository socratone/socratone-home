import styled from '@emotion/styled';

interface ICategoryTitle {
  children: string;
  style?: React.CSSProperties;
}

const StyledCategoryTitle = styled.h1`
  font-weight: 500;
  font-size: 18px;
  color: #999;
`;

const CategoryTitle: React.FC<ICategoryTitle> = ({ children, style }) => {
  return <StyledCategoryTitle style={style}>{children}</StyledCategoryTitle>;
};

export default CategoryTitle;
