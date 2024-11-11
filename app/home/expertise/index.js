'use client'

import {
  Container,
  GridWrapper,
  HugeText,
  LargeText,
  MediumText,
  NormalText,
} from 'styles'
import {
  Card,
  Cards,
  CardWrapper,
  DescriptionWrapper,
  ExpertiseSection,
  FlipCardBack,
  FlipCardFront,
  FlipCardInner,
  ServicesItem,
  ServicesWrapper,
  TitleCardWrapper,
  TitleWrapper,
} from './styles'
import Image from 'next/image'
import { forwardRef, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { CustomDescription, CustomTitle } from 'components'

gsap.registerPlugin(ScrollTrigger)

const CARDS = [
  {
    title: 'DESIGN',
    description:
      'From concept to reality, we understand your specific requirements and objectives.',
    services: [
      'Service item one',
      'Service item two',
      'Service item three',
      'Service item four',
      'Service item five',
    ],
  },
  {
    title: 'DEVELOPMENT',
    description:
      'Our engineers then develop prototypes to bring your vision to life.',
    services: [
      'Service item one',
      'Service item two',
      'Service item three',
      'Service item four',
      'Service item five',
    ],
  },
  {
    title: 'INTEGRATION',
    description:
      'Finally, we implement the robotic solutions within your existing frameworks.',
    services: [
      'Service item one',
      'Service item two',
      'Service item three',
      'Service item four',
      'Service item five',
    ],
  },
  {
    title: 'SUPPORT',
    description:
      'Our team provides ongoing support to ensure your systems run smoothly.',
    services: [
      'Service item one',
      'Service item two',
      'Service item three',
      'Service item four',
      'Service item five',
    ],
  },
]

const SingleCard = forwardRef(({ info, id, animationDelay }, ref) => {
  return (
    <Card id={id} ref={ref}>
      <CardWrapper style={{ animationDelay: `${animationDelay}s` }}>
        <FlipCardInner>
          <FlipCardFront className="flip-card-front">
            <Image
              src={'/card.webp'}
              priority
              width={500}
              height={500}
              alt="Card item"
            />
          </FlipCardFront>
          <FlipCardBack className="flip-card-back">
            <TitleCardWrapper>
              <MediumText>{info.title}</MediumText>
              <NormalText>{info.description}</NormalText>
            </TitleCardWrapper>
            <ServicesWrapper>
              {info.services.map((service, index) => (
                <ServicesItem key={index}>
                  <NormalText>{service}</NormalText>
                </ServicesItem>
              ))}
            </ServicesWrapper>
          </FlipCardBack>
        </FlipCardInner>
      </CardWrapper>
    </Card>
  )
})

const Expertise = () => {
  const sectionTarget = useRef()
  const cardContainer = useRef()
  const cardRefs = useRef([])

  useGSAP(
    () => {
      const cards = cardRefs.current
      const totalScrollHeight = window.innerHeight * 3
      const positions = [14, 38, 62, 86]
      const rotations = [-15, -7.5, 7.5, 15]

      ScrollTrigger.create({
        trigger: cardContainer.current,
        start: 'top top',
        end: () => `+=${totalScrollHeight}`,
        pin: true,
        pinSpacing: true,
      })

      gsap.from(cardContainer.current, {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: cardContainer.current,
          start: 'top-=60% bottom',
          end: () => `+=${window.innerHeight * 2}`,
          scrub: 1,
        },
      })

      cards.forEach((card, index) => {
        gsap.to(card, {
          left: `${positions[index]}%`,
          rotation: `${rotations[index]}`,
          ease: 'none',
          scrollTrigger: {
            trigger: cardContainer.current,
            start: 'top-=60% top',
            end: () => `+=${window.innerHeight}`,
            scrub: 1,
            id: `spread-${index}`,
          },
        })
      })

      cards.forEach((card, index) => {
        const frontEl = card.querySelector('.flip-card-front')
        const backEl = card.querySelector('.flip-card-back')

        const staggerOffset = index * 0.05
        const startOffset = 1 / 3 + staggerOffset
        const endOffset = 2 / 3 + staggerOffset

        ScrollTrigger.create({
          trigger: cardContainer.current,
          start: 'top top',
          end: () => `+=${totalScrollHeight}`,
          scrub: 1,
          id: `rotate-flip-${index}`,
          onUpdate: (self) => {
            const progress = self.progress
            if (progress >= startOffset && progress <= endOffset) {
              const animationProgress = (progress - startOffset) / (1 / 3)
              const frontRotation = -180 * animationProgress
              const backRotation = 180 - 180 * animationProgress
              const cardRotation = rotations[index] * (1 - animationProgress)

              gsap.to(frontEl, { rotateY: frontRotation, ease: 'power1.out' })
              gsap.to(backEl, { rotateY: backRotation, ease: 'power1.out' })
              gsap.to(card, {
                xPercent: -50,
                yPercent: -50,
                rotate: cardRotation,
                ease: 'power1.out',
              })
            }
          },
        })
      })
    },
    { scope: cardContainer },
  )

  return (
    <ExpertiseSection ref={sectionTarget}>
      <Container>
        <GridWrapper>
          <TitleWrapper>
            <CustomTitle top={'Area of'} bottom={'Expertise'} />
          </TitleWrapper>
          <DescriptionWrapper>
            <CustomDescription>
              A team of experienced engineers with a wide range of skills and
              knowledge
            </CustomDescription>
          </DescriptionWrapper>
        </GridWrapper>
        <Cards ref={cardContainer}>
          {CARDS.map((card, index) => (
            <SingleCard
              key={index}
              info={card}
              id={`card-${index + 1}`}
              animationDelay={0.2 * index - 0.2}
              ref={(el) => (cardRefs.current[index] = el)}
            />
          ))}
        </Cards>
      </Container>
    </ExpertiseSection>
  )
}

export default Expertise
