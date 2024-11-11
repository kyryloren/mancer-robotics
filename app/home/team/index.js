import { Container, GridWrapper, HugeText, NormalText } from 'styles'
import {
  DescriptionWrapper,
  TeamSection,
  TitleHolder,
  ImageWrapper,
} from './styles'
import {
  CustomButton,
  CustomDescription,
  CustomImage,
  CustomTitle,
} from 'components'

const Team = () => {
  return (
    <TeamSection>
      <Container>
        <GridWrapper style={{ gridTemplateRows: 'auto' }}>
          <TitleHolder>
            <CustomTitle top={'Meet Our'} bottom={'Team'} />
            <DescriptionWrapper>
              <CustomDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </CustomDescription>
              <CustomButton to={'/about'}>About</CustomButton>
            </DescriptionWrapper>
          </TitleHolder>
          <ImageWrapper>
            <CustomImage src={'/team.webp'} alt={'Mancer Robotics Team'} />
          </ImageWrapper>
        </GridWrapper>
      </Container>
    </TeamSection>
  )
}

export default Team
