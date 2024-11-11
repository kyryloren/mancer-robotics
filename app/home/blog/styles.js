'use client'

import styled from 'styled-components'
import { SectionWrapper } from 'styles'

export const BlogSection = styled(SectionWrapper)`
  padding-bottom: var(--space-4xl);
`
export const TitleWrapper = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-s);
  padding-bottom: var(--space-xl);

  p {
    width: 24%;
    margin: 0 auto;
    color: ${({ theme }) => `rgb(${theme.gray})`};
  }
`

export const CenterText = styled.div`
  grid-column: 5 / 8;
  /* position: relative; */
  /* top: 10%; */
  display: flex;
  flex-direction: column;
  gap: var(--space-m);
`
export const LeftImage = styled.div`
  grid-column: 1 / 4;
  height: 30vw;
  /* background-color: ${({ theme }) => `rgb(${theme.white})`}; */
`
export const CenterImage = styled.div`
  grid-column: 8 / 10;
  height: 20vw;
  /* background-color: ${({ theme }) => `rgb(${theme.white})`}; */
`
export const RightImage = styled.div`
  grid-column: 10 / -1;
  position: relative;
  top: 80%;
  height: 25vw;
  /* background-color: ${({ theme }) => `rgb(${theme.white})`}; */
`
