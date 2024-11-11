'use client'

import { Container, DisplayText, NormalText } from 'styles'
import {
  ContentBox1,
  ContentBox2,
  CustomGridWrapper,
  HeroSection,
  RobotObject,
  TextBox,
  TextWrapper,
} from './styles'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useRef } from 'react'
import { UseCanvas } from '@14islands/r3f-scroll-rig'
import { StickyScrollScene } from '@14islands/r3f-scroll-rig/powerups'


const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <CustomGridWrapper>
          <ContentBox1>
            <NormalText>Innovating Robotics</NormalText>
            <NormalText>Since 2020</NormalText>
          </ContentBox1>
          <ContentBox2>
            <TextWrapper>
              <NormalText>
                At Mancer Robotics, we harness{' '}
                <span>cutting-edge technology</span> to transform the way
                <span>infrastructure</span> is inspected and automated. Our
                innovative robots are designed to{' '}
                <span>enhance efficiency</span> and drive <span>progress</span>{' '}
                in architectural projects.
              </NormalText>
            </TextWrapper>
          </ContentBox2>
          <TextBox>
            <DisplayText>
              <span>Building a</span>
              <span>Better</span>
              <span>Tomorrow</span>
            </DisplayText>
          </TextBox>
        </CustomGridWrapper>
      </Container>
    </HeroSection>
  )
}

export default Hero
