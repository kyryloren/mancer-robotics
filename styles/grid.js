'use client'

import styled, { css } from 'styled-components'
import media, { reversePxCutOff } from './media'

export const Grid = css`
  display: grid;
  position: relative;
  grid-gap: 2vw;
  grid-template-columns: repeat(12, 1fr);

  ${media.desktopL`grid-gap: ${reversePxCutOff(2)};`}
  ${media.tablet`grid-template-columns: repeat(6, 1fr);`}
`
export const GridWrapper = styled.div`
  ${Grid}
`
