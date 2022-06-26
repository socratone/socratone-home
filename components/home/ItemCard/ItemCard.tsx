import styled from '@emotion/styled';
import Image, { ImageProps } from 'next/image';
import { border } from '../../../constants/color';

interface IItemCardProps {
  title: string;
  description: string;
  imageSrc: ImageProps['src'];
  href: string;
}

const StyledItemCard = styled.a`
  padding: 20px 30px 20px 15px;
  border: 1px solid ${border};
  border-radius: 5px;
  transition: background 150ms ease-out, border 150ms ease-out,
    transform 150ms ease-out;
  color: #333;
  display: flex;
  align-items: flex-start;
  cursor: pointer;

  :hover {
    border-color: #1ea7fd50;
    transform: translate3d(0, -3px, 0);
    box-shadow: rgb(0 0 0 / 8%) 0 3px 10px 0;
  }
`;

const StyledImageContainer = styled.div`
  margin-right: 15px;
  flex-shrink: 0;

  > * {
    display: block !important;
  }

  img {
    opacity: 0.7;
  }
`;

const StyledTextContainer = styled.div``;

const StyledTitle = styled.p`
  font-size: 14px;
  font-weight: 600;
  display: block;
  margin-bottom: 2px;
`;

const StyledDescription = styled.p`
  font-size: 14px;
  line-height: 20px;
  white-space: pre-line;
`;

const ItemCard: React.FC<IItemCardProps> = ({
  title,
  description,
  imageSrc,
  href,
}) => {
  return (
    <StyledItemCard href={href} target="_blank">
      <StyledImageContainer>
        <Image src={imageSrc} alt={title} width={40} height={40} />
      </StyledImageContainer>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledTextContainer>
    </StyledItemCard>
  );
};

export default ItemCard;
