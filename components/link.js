'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Link from 'next/link'
import { useRef } from 'react'
import styled, { css } from 'styled-components'
import { Normal } from 'styles'

const LinkStyles = css`
  position: relative;
  color: ${({ theme }) => `rgb(${theme.black})`};
  text-decoration: none;
  pointer-events: all;
  cursor: pointer;
  ${Normal}
`

const InternalLink = styled(Link)`
  ${LinkStyles}
`
const ExternalLink = styled.a`
  ${LinkStyles}
`

const CustomLink = ({ to, href, target, onClick, children }) => {
  const movingContainerRef = useRef(null)
  const charsEl = useRef([])
  const { contextSafe } = useGSAP({ scope: movingContainerRef })

  const handleMouseEnter = contextSafe(() => {
    let tl = gsap.timeline()

    tl.to(charsEl.current, {
      opacity: 0,
      stagger: 0.02,
    }).to(
      charsEl.current,
      {
        opacity: 1,
        stagger: 0.02,
      },
      '<30%',
    )
  })

  if (to) {
    return (
      <InternalLink
        href={to}
        onMouseEnter={handleMouseEnter}
        onClick={onClick}
        ref={movingContainerRef}
      >
        {children.split('').map((char, index) => (
          <span ref={(el) => charsEl.current.push(el)} key={index}>
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </InternalLink>
    )
  }

  return (
    <ExternalLink
      href={href}
      target={target === '_blank' ? '_blank' : undefined}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      onClick={onClick}
      ref={movingContainerRef}
    >
      {children.split('').map((char, index) => (
        <span ref={(el) => charsEl.current.push(el)} key={index}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </ExternalLink>
  )
}

export default CustomLink
