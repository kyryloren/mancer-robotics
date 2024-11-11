'use client'

import styled from 'styled-components'
import { SectionWrapper, Z_INDEX } from 'styles'

export const TeamSection = styled(SectionWrapper)`
  width: 100vw;
  padding: var(--space-4xl) 0;
  background-color: ${({ theme }) => `rgb(${theme.white})`};
  clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0 95%);
  z-index: ${Z_INDEX.team};
`
export const TitleHolder = styled.div`
  grid-column: 6 / 12;
  display: flex;
  flex-direction: column;
  gap: var(--space-l);
  color: ${({ theme }) => `rgb(${theme.gray})`};
  margin-bottom: var(--space-m);
`
export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: var(--space-l);
  color: ${({ theme }) => `rgb(${theme.black})`};
`
export const ImageWrapper = styled.div`
  grid-column: 2 / 12;
  position: relative;
  width: 100%;
  height: 55vw;
`
