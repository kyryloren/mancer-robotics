import { Container, GridWrapper, MediumText, NormalText } from 'styles'
import {
  BlogSection,
  CenterImage,
  CenterText,
  LeftImage,
  RightImage,
  TitleWrapper,
} from './styles'
import {
  CustomButton,
  CustomDescription,
  CustomImage,
  CustomTitle,
} from 'components'

const Blog = () => {
  return (
    <BlogSection>
      <Container>
        <GridWrapper>
          <TitleWrapper>
            <CustomTitle top={'The Epitome'} bottom={'of Robotics'} />
            <CustomDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </CustomDescription>
          </TitleWrapper>

          <LeftImage>
            <CustomImage src="/1.png" alt="Blog" />
          </LeftImage>
          <CenterText>
            <MediumText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            </MediumText>
            <CustomButton>Read more</CustomButton>
          </CenterText>
          <CenterImage>
            <CustomImage src="/2.png" alt="Blog" />
          </CenterImage>
          <RightImage>
            <CustomImage src="/1.png" alt="Blog" />
          </RightImage>
        </GridWrapper>
      </Container>
    </BlogSection>
  )
}

export default Blog
