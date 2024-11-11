'use client'

import styled, { keyframes } from 'styled-components'
import { SectionWrapper } from 'styles'

export const ExpertiseSection = styled(SectionWrapper)`
  padding-top: var(--space-4xl);
`
export const TitleWrapper = styled.div`
  grid-column: 2 / 8;
`
export const DescriptionWrapper = styled.div`
  grid-column: 10 / 12;
  position: relative;
  color: ${({ theme }) => `rgb(${theme.gray})`};
`
export const Cards = styled.div`
  width: 100%;
  height: 100vh;
`
export const Card = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20vw;
  height: 30vw;
  perspective: 1000px;
`
const floating = keyframes`
    0% { transform: translate(-50%, -50%); }
    50% { transform: translate(-50%, -60%); }
    100% { transform: translate(-50%, -50%); }
`
export const CardWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  animation: ${floating} 3s infinite ease-in-out;
`
export const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
`

const FlipCardStyle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 0.8em;
  overflow: hidden;
`
export const FlipCardFront = styled(FlipCardStyle)`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const FlipCardBack = styled(FlipCardStyle)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: var(--space-m);
  background-color: ${({ theme }) => `rgb(${theme.white})`};
  transform: rotateY(180deg);
`
export const TitleCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
`
export const ServicesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const ServicesItem = styled.div`
  padding: var(--space-xs) 0;

  &:not(:first-child) {
    border-top: 1px dashed ${({ theme }) => `rgba(${theme.gray}, 0.3)`};
  }
`
