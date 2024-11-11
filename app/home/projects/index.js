'use client'

import { useRef } from 'react'
import {
  Container,
  GridWrapper,
  HugeText,
  MediumText,
  NormalText,
} from 'styles'
import {
  Cols,
  ImageWrapper,
  ProjectsSection,
  StickyWrapper,
  TitleHeader,
} from './styles'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { CustomDescription, CustomImage, CustomTitle } from 'components'

gsap.registerPlugin(ScrollTrigger)

const TEXT = `We work with a multitude of industries at different capacities.`

const Projects = () => {
  const sectionTarget = useRef()
  const stickyText = useRef([])
  const stickyWrapper = useRef()

  // useGSAP(() => {
  //   let tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: stickyWrapper.current,
  //       start: 'top bottom-=30%',
  //       end: 'bottom top',
  //       scrub: true,
  //     },
  //   })

  //   tl.from(
  //     stickyText.current,
  //     {
  //       opacity: 0.2,
  //       filter: 'blur(10px)',
  //       stagger: 0.2,
  //     },
  //     0,
  //   )

  //   gsap.to(stickyWrapper.current, {
  //     y:
  //       sectionTarget.current.clientHeight -
  //       stickyWrapper.current.clientHeight * 3,
  //     ease: 'none',
  //     scrollTrigger: {
  //       trigger: sectionTarget.current,
  //       start: 'top center',
  //       end: 'bottom center',
  //       scrub: 1,
  //     },
  //   })
  // })

  return (
    <ProjectsSection ref={sectionTarget}>
      <Container>
        <GridWrapper style={{ gridTemplateRows: 'auto' }}>
          <TitleHeader>
            <CustomTitle top={'Selected'} bottom={'Projects'} />
          </TitleHeader>
          <StickyWrapper>
            <CustomDescription>
              We work with a multitude of industries at different capacities.
            </CustomDescription>
          </StickyWrapper>
          <Cols style={{ gridColumn: '2 / 6' }}>
            <ImageWrapper style={{ height: '40vw' }}>
              <CustomImage src={'/1.png'} />
            </ImageWrapper>

            <MediumText>Lore Ipsum Dolor Semet</MediumText>
          </Cols>
          <Cols style={{ gridColumn: '7 / 10', marginTop: 'var(--space-xl)' }}>
            <ImageWrapper>
              <CustomImage src={'/2.png'} />
            </ImageWrapper>

            <MediumText>Lore Ipsum Dolor Semet</MediumText>
          </Cols>
          <Cols style={{ gridColumn: '2 / 5', marginTop: 'var(--space-3xl)' }}>
            <ImageWrapper>
              <CustomImage src={'/1.png'} />
            </ImageWrapper>

            <MediumText>Lore Ipsum Dolor Semet</MediumText>
          </Cols>
          <Cols style={{ gridColumn: '6 / 8', marginTop: 'var(--space-xl)' }}>
            <ImageWrapper style={{ height: '20vw' }}>
              <CustomImage src={'/2.png'} />
            </ImageWrapper>

            <MediumText>Lore Ipsum Dolor Semet</MediumText>
          </Cols>
        </GridWrapper>
      </Container>
    </ProjectsSection>
  )
}

export default Projects
