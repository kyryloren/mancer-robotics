'use client'

import styled from 'styled-components'
import { SectionWrapper, Z_INDEX } from 'styles'

export const ProjectsSection = styled(SectionWrapper)`
  width: 100vw;
  padding-bottom: var(--space-4xl);
  z-index: ${Z_INDEX.projects};
`
export const TitleHeader = styled.div`
  grid-column: 2 / 10;
  padding-bottom: var(--space-l);
`
export const StickyWrapper = styled.div`
  grid-column: 10 / 12;
  position: relative;
  color: ${({ theme }) => `rgb(${theme.gray})`};
`
export const Cols = styled.div`
  border-top-left-radius: 30px;
  border-bottom-right-radius: 30px;

  p {
    padding: var(--space-2xs) 0;
    color: ${({ theme }) => `rgb(${theme.gray})`};
  }
`
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 30vw;
`
