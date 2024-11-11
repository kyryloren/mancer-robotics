'use client'

import { Container, LargeText } from 'styles'
import { AboutSection, TextWrapper } from './styles'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const TEXT_ONE =
  'We harness cutting-edge technology to redefine the landscape of architecture and infrastructure.'
const TEXT_TWO =
  'Our robots are designed to enhance efficiency, safety, and precision in inspection and automation tasks.'

const About = () => {
  const sectionTarget = useRef()

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: sectionTarget.current,
          start: 'top bottom-=30%',
          end: 'bottom bottom-=30%',
          scrub: 1,
        },
      })
      .fromTo(
        gsap.utils.toArray('.anim-text'),
        { opacity: 0.2, filter: 'blur(10px)' },
        { opacity: 1, filter: 'blur(0px)', stagger: 0.2 },
      )
  })

  return (
    <AboutSection ref={sectionTarget}>
      <Container>
        <TextWrapper>
          <LargeText>
            {TEXT_ONE.split(' ').map((word, index) => (
              <span key={index} className="anim-text">
                {word}{' '}
              </span>
            ))}
          </LargeText>
        </TextWrapper>

        <TextWrapper second>
          <LargeText>
            {TEXT_TWO.split(' ').map((word, index) => (
              <span key={index} className="anim-text">
                {word}{' '}
              </span>
            ))}
          </LargeText>
        </TextWrapper>
      </Container>
    </AboutSection>
  )
}

export default About
