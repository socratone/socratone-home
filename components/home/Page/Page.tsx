import styled from '@emotion/styled';

interface IPageProps {
  children: React.ReactNode;
}

const StyledPage = styled.section`
  padding: 20px;
  max-width: 1024px;
  margin: 0 auto;
`;

const Page: React.FC<IPageProps> = ({ children }) => {
  return <StyledPage>{children}</StyledPage>;
};

export default Page;
