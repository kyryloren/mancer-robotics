'use client'

import styled from 'styled-components'
import { SectionWrapper, Z_INDEX } from 'styles'

export const HeroSection = styled(SectionWrapper)`
  width: 100vw;
  height: 100vh;
`
export const CustomGridWrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
`
const ContentBox = styled.div`
  grid-row: 1 / 3;
  display: flex;
  padding: var(--space-l) 0;
  border-bottom: 1px solid ${({ theme }) => `rgb(${theme.gray}, 0.3)`};

  p {
    color: ${({ theme }) => `rgb(${theme.gray})`};

    span {
      color: ${({ theme }) => `rgb(${theme.black})`};
    }
  }
`
export const ContentBox1 = styled(ContentBox)`
  grid-column: 1 / 8;
  display: flex;
  flex-direction: column;
`
export const ContentBox2 = styled(ContentBox)`
  grid-column: 8 / -1;
  border-left: 1px solid ${({ theme }) => `rgb(${theme.gray}, 0.3)`};
`
export const TextWrapper = styled.div`
  max-width: 75%;
`
export const TextBox = styled.div`
  grid-row: 3 / -1;
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding-top: var(--space-l-xl);

  span {
    display: block;

    &:nth-child(2) {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      background: -webkit-linear-gradient(#f655ff, #757cff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`
export const RobotObject = styled.div`
  width: 500px;
  height: 500px;
  position: absolute;
  left: 50%;
  top: 80%;
  transform: translate(-50%, -80%);
  background-color: white;
`
