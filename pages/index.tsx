import type { NextPage } from 'next';
import ItemCard from '../components/home/ItemCard';
import Page from '../components/home/Page';
import Heading from '../components/home/Heading';
import CategoryTitle from '../components/home/CategoryTitle';
import styled from '@emotion/styled';
import Description from '../components/home/Description';
import SourceAnchor from '../components/home/SourceAnchor';

import bead from '../public/icons/home/bead.png';
import praying from '../public/icons/home/praying.png';
import guitar from '../public/icons/home/guitar.png';
import electricGuitar from '../public/icons/home/electric-guitar.png';
import manuscript from '../public/icons/home/manuscript.png';
import image from '../public/icons/home/image.png';
import gradient from '../public/icons/home/gradient.png';
import dropper from '../public/icons/home/dropper.png';
import learningCurve from '../public/icons/home/learning-curve.png';
import placeholder from '../public/icons/home/placeholder.png';
import GlobalNav from '../components/common/GlobalNav';
import { border } from '../constants/color';

const StyledItemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const StyledFooter = styled.footer`
  padding-top: 10px;
  border-top: 1px solid ${border};
`;

const Home: NextPage = () => {
  return (
    <>
      <GlobalNav />
      <Page>
        <Heading style={{ marginBottom: '10px' }}>Workbench</Heading>

        <Description style={{ marginBottom: '40px' }}>
          I have listed the things I use when I do some work.
        </Description>

        <CategoryTitle style={{ marginBottom: '10px' }}>Music</CategoryTitle>

        <StyledItemGrid style={{ marginBottom: '40px' }}>
          <ItemCard
            href="https://www.youtube.com/playlist?list=PLcua7V7KWV0aB_cN_d4rMeEa7Son4SYTd"
            imageSrc={praying}
            title="Peaceful Instrumental"
            description="for studying or praying"
          />
          <ItemCard
            href="https://www.youtube.com/playlist?list=PLcua7V7KWV0Yvj8DIejRJd1uV6C0Gagfe"
            imageSrc={bead}
            title="Peaceful Song"
            description="for studying or praying"
          />
          <ItemCard
            href="https://www.youtube.com/playlist?list=PLcua7V7KWV0bK95P42ocW2C8v1Qn1B1jc"
            imageSrc={guitar}
            title="Rock"
            description="for power"
          />
          <ItemCard
            href="https://www.youtube.com/playlist?list=PLcua7V7KWV0anJ8zz-jVPDNXZtzn-nfl1"
            imageSrc={electricGuitar}
            title="Power Metal"
            description="for super power"
          />
        </StyledItemGrid>

        <CategoryTitle style={{ marginBottom: '10px' }}>Company</CategoryTitle>

        <StyledItemGrid style={{ marginBottom: '40px' }}>
          <ItemCard
            href="https://www.notion.so/794d320c112a4323a8f9c39259bc5677?v=5d0fddaab066414ebb2d480afe37406c"
            imageSrc={manuscript}
            title="Business Notes"
            description="for working"
          />
        </StyledItemGrid>

        <CategoryTitle style={{ marginBottom: '10px' }}>
          Development Tools
        </CategoryTitle>

        <StyledItemGrid style={{ marginBottom: '40px' }}>
          <ItemCard
            href="https://picsum.photos/"
            imageSrc={image}
            title="Lorem Picsum"
            description="random photos"
          />
          <ItemCard
            href="https://www.colorzilla.com/gradient-editor/"
            imageSrc={gradient}
            title="Ultimate CSS Gradient Generator"
            description="a powerful Photoshop-like CSS gradient editor"
          />
          <ItemCard
            href="https://getcssscan.com/css-box-shadow-examples"
            imageSrc={dropper}
            title="Beautiful CSS box-shadow examples"
            description="all of these box-shadow were copied"
          />
          <ItemCard
            href="https://cubic-bezier.com"
            imageSrc={learningCurve}
            title="Cubic Bezier"
            description="bezier curve for animation"
          />
          <ItemCard
            href="https://realfavicongenerator.net"
            imageSrc={placeholder}
            title="Favicon Generator"
            description="web favicon generator"
          />
        </StyledItemGrid>

        {/*
      
      */}

        <StyledFooter>
          <SourceAnchor
            href="https://www.flaticon.com/free-icons/webpage"
            title="webpage icons"
          >
            Webpage icons created by Freepik - Flaticon
          </SourceAnchor>

          <SourceAnchor
            href="https://www.flaticon.com/free-icons/pray"
            title="pray icons"
          >
            Pray icons created by Freepik - Flaticon
          </SourceAnchor>

          <SourceAnchor
            href="https://www.flaticon.com/free-icons/beads"
            title="Beads icons"
          >
            Beads icons created by Freepik - Flaticon
          </SourceAnchor>

          <SourceAnchor
            href="https://www.flaticon.com/free-icons/guitar"
            title="guitar icons"
          >
            Guitar icons created by Freepik - Flaticon
          </SourceAnchor>

          <SourceAnchor
            href="https://www.flaticon.com/free-icons/register"
            title="register icons"
          >
            Register icons created by Freepik - Flaticon
          </SourceAnchor>

          <SourceAnchor
            href="https://www.flaticon.com/free-icons/photo"
            title="photo icons"
          >
            Photo icons created by Freepik - Flaticon
          </SourceAnchor>

          <SourceAnchor
            href="https://www.flaticon.com/free-icons/art"
            title="art icons"
          >
            Art icons created by Freepik - Flaticon
          </SourceAnchor>

          <SourceAnchor
            href="https://www.flaticon.com/free-icons/dropper"
            title="dropper icons"
          >
            Dropper icons created by Freepik - Flaticon
          </SourceAnchor>

          <SourceAnchor
            href="https://www.flaticon.com/free-icons/learning-curve"
            title="learning curve icons"
          >
            Learning curve icons created by Freepik - Flaticon
          </SourceAnchor>

          <SourceAnchor
            href="https://www.flaticon.com/free-icons/pin"
            title="pin icons"
          >
            Pin icons created by Freepik - Flaticon
          </SourceAnchor>
        </StyledFooter>
      </Page>
    </>
  );
};

export default Home;
