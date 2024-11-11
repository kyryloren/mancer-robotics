'use client'

import styled from 'styled-components'
import { SectionWrapper, Z_INDEX } from 'styles'

export const AboutSection = styled(SectionWrapper)`
  padding-bottom: calc(var(--space-4xl) * 2);
  z-index: ${Z_INDEX.about};
`
export const TextWrapper = styled.div`
  max-width: 40%;
  color: ${({ theme }) => `rgb(${theme.gray})`};

  ${({ second }) => second && `margin-left: auto;`}
`
