'use client'

import styled from 'styled-components'
import { HugeText, NormalText } from 'styles'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const Overflow = styled.span`
  overflow: hidden;
  display: block;
`
const LightText = styled.span`
  color: ${({ theme }) => `rgb(${theme.gray})`};
  display: inline-block;
`
const DarkText = styled.span`
  color: ${({ theme }) => `rgb(${theme.black})`};
  display: inline-block;
`

const DescriptionWord = styled.span`
  color: ${({ theme }) => `rgb(${theme.gray})`};
  display: block;
`

export const AnimButton = ({ children }) => {
  const buttonEl = useRef([])

  useGSAP(
    () => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: buttonEl.current,
          start: 'top bottom',
          toggleActions: 'play pause resume reverse',
        },
      })

      tl.from(buttonEl.current, {
        opacity: 0,
        duration: 1,
        ease: 'power3.inOut',
      })
    },
    { scope: buttonEl },
  )

  return (
    <>
      <div ref={buttonEl}>{children}</div>
    </>
  )
}

export const CustomDescription = ({ children }) => {
  const textEl = useRef([])

  useGSAP(
    () => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: textEl.current,
          start: 'top bottom',
          toggleActions: 'play pause resume reverse',
        },
      })

      tl.from(textEl.current, {
        yPercent: 100,
        duration: 1,
        ease: 'power3.inOut',
        stagger: 0.02,
      })
    },
    { scope: textEl },
  )

  return (
    <NormalText>
      {children.split(' ').map((word, index) => (
        <>
          <Overflow style={{ display: 'inline-block' }}>
            <DescriptionWord
              key={index}
              ref={(el) => (textEl.current[index] = el)}
            >
              {word + ' '}
            </DescriptionWord>
          </Overflow>
          <span> </span>
        </>
      ))}
    </NormalText>
  )
}

const CustomTitle = ({ top, bottom }) => {
  const textEl = useRef()
  const topLine = useRef([])
  const bottomLine = useRef([])

  useGSAP(
    () => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: textEl.current,
          start: 'top bottom',
          toggleActions: 'play pause resume reverse',
        },
      })

      tl.from(
        topLine.current,
        {
          yPercent: 100,
          duration: 1,
          ease: 'power3.inOut',
          stagger: 0.02,
        },
        0,
      ).from(
        bottomLine.current,
        {
          yPercent: -100,
          duration: 1,
          ease: 'power3.inOut',
          stagger: 0.02,
        },
        0,
      )
    },
    { scope: textEl },
  )

  return (
    <HugeText ref={textEl}>
      <Overflow>
        {top.split('').map((char, index) => (
          <LightText key={index} ref={(el) => (topLine.current[index] = el)}>
            {char === ' ' ? '\u00A0' : char}
          </LightText>
        ))}
      </Overflow>
      <Overflow style={{ marginTop: '-1vw' }}>
        {bottom.split('').map((char, index) => (
          <DarkText key={index} ref={(el) => (bottomLine.current[index] = el)}>
            {char === ' ' ? '\u00A0' : char}
          </DarkText>
        ))}
      </Overflow>
    </HugeText>
  )
}

export default CustomTitle
