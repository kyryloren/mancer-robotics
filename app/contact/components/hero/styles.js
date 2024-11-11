'use client'

import styled from 'styled-components'
import { SectionWrapper } from 'styles'

export const HeroSection = styled(SectionWrapper)`
  width: 100vw;
  height: ${({ offset }) => `calc(100vh - ${offset}px)`};
`
export const CustomInput = styled.input`
  font-family: inherit;
  width: 100px;
  border: none;
  background-image: none;
  background-color: transparent;
  color: transparent;
  caret-color: #848484;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  font-weight: 400;
  caret-color: transparent;
  outline: 0;
  padding: 0;

  input:focus {
    outline: none;
    box-shadow: none !important;
  }
`
