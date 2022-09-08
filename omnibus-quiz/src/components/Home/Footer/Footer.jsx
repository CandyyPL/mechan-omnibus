import React from 'react'
import { FooterBottom, Quote, Wrapper } from '@/components/Home/Footer/Footer.styles'

const Footer = () => {
  return (
    <Wrapper>
      <Quote>Standardowa edukacja zapewni Ci przeżycie. Samokształcenie - fortunę ~ Jim Rohn</Quote>
      <FooterBottom>
        <span>Copyright &copy; 2022 All rights reserved</span>
        <span>Powered by Mechan Web Dev</span>
      </FooterBottom>
    </Wrapper>
  )
}

export default Footer
