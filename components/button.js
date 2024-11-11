'use client'

import Link from 'next/link'
import styled, { css } from 'styled-components'
import { Normal } from 'styles'

const ButtonStyles = css`
  cursor: pointer;
  position: relative;
  padding: var(--space-2xs) var(--space-s);
  border-radius: 5px;
  pointer-events: all;
  text-decoration: none;
  border: 1px solid ${({ theme }) => `rgba(${theme.gray}, 0.3)`};
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  width: fit-content;
  transition:
    border-color 0.3s cubic-bezier(0.7, 0, 0.2, 1),
    transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
  z-index: 1;
  ${Normal}

  &:hover {
    border-color: ${({ theme }) => `rgba(${theme.gray}, 1)`};
    &:before {
      transform: translate3d(0%, 0%, 0);
    }
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => `rgba(${theme.gray}, 0.3)`};
    border-radius: inherit;
    transform: translate3d(-100%, 100%, 0);
    transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
  }

  span {
    position: relative;
    mix-blend-mode: difference;
    color: ${({ theme }) => `rgb(${theme.black})`};
  }
`

const InternalLink = styled(Link)`
  ${ButtonStyles}
`
const ExternalLink = styled.a`
  ${ButtonStyles}
`

const CustomButton = ({ to, href, target, nav, children }) => {
  if (to) {
    return (
      <InternalLink href={to} id={'nav-button'}>
        <span>{children}</span>
      </InternalLink>
    )
  }

  return (
    <ExternalLink
      href={href}
      target={target === '_blank' ? '_blank' : undefined}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
    >
      <span>{children}</span>
    </ExternalLink>
  )
}

export default CustomButton
