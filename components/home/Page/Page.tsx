import styled from '@emotion/styled';
import { mobileGlobalNavHeight } from '../../../constants/size';

interface IPageProps {
  children: React.ReactNode;
}

const StyledPage = styled.section`
  padding: 20px;
  max-width: 1024px;
  margin: 0 auto;

  @media only screen and (max-width: 600px) {
    margin-top: ${mobileGlobalNavHeight}px;
  }
`;

const Page: React.FC<IPageProps> = ({ children }) => {
  return <StyledPage>{children}</StyledPage>;
};

export default Page;
