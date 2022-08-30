import TopbarMenu from '@/components/TopbarMenu/TopbarMenu'
import {
  Board,
  Button,
  ClassChoose,
  ClassOption,
  Copyright,
  Footer,
  // FooterEntry,
  FooterRight,
  JoinForm,
  JoinLeft,
  JoinNow,
  JoinNowButton,
  JoinNowWrapper,
  JoinWarning,
  MiddlePart,
  Quote,
  // RankingText,
  Smoke,
  TopPart,
  TopPartCloser,
  ToS,
  Wrapper,
} from '@/pages/Home/Home.styles'
import React, { FC, useRef, useState } from 'react'
import studentImg from '@/assets/student.png'
import lightsImg from '@/assets/lights.png'
// import arrowImg from '@/assets/down-arrow.png'
import busImg from '@/assets/bus-big.png'
import excImg from '@/assets/danger.png'
import axios from 'axios'

const Home: FC = () => {
  const handleScrollToJoin = () => {
    window.scrollTo({
      top: 850,
      behavior: 'smooth',
    })
  }

  return (
    <Wrapper>
      <TopbarMenu />
      <TopPart>
        <JoinNow>
          NIE CZEKAJ, <JoinNowButton onClick={handleScrollToJoin}>DOŁĄCZ</JoinNowButton> JUŻ TERAZ
        </JoinNow>
        <Smoke>
          <p>Mechan4ever!</p>
        </Smoke>
        <img className='student' src={studentImg} alt='student' />
        <Board>
          <p className='main'>Witaj w Omnibusie!</p>
          <p>
            Jest to platforma quizowa <br /> Zespołu Szkół Technicznych w Pile. <br /> Odpowiadaj na
            pytania z zakresu języków obcych, matematyki, historii oraz informatyki, zdobywaj punkty
            i awansuj w rankingu!
          </p>
        </Board>
        <img className='lights' src={lightsImg} alt='lights' />
      </TopPart>
      <TopPartCloser />
      <MiddlePart>
        {/* <RankingText>
          ranking <img src={arrowImg} alt='arrow' />
        </RankingText> */}
        <JoinNowWrapper>
          <JoinForm onSubmit={handleSignup}>
            <p className='title'>Zapisz się</p>
            <input
              type='text'
              name='name_surname'
              placeholder='Imię i nazwisko'
              ref={nameRef}
              value={nameVal}
              onChange={handleNameChange}
              required
            />
            <input
              type='email'
              name='email'
              placeholder='Adres e-mail'
              ref={emailRef}
              value={emailVal}
              onChange={handleEmailChange}
              required
            />

            <input
              type='text'
              name='profile'
              placeholder='Profil nauki'
              ref={profileRef}
              value={profileVal}
              onChange={handleProfileChange}
              required
            />
            <Button type='submit'>WYŚLIJ ZGŁOSZENIE</Button>
          </JoinForm>
          <JoinLeft>
            <img src={busImg} alt='bus' />
            <JoinWarning>
              <span>
                Upewnij się, że podane dane są prawdziwe. <br /> W przypadku podania nieprawdziwych
                danych <br /> odbiór ewentualnych nagród będzie niemożliwy, <br /> a twoje konto
                może zostać usunięte!
              </span>
              <img src={excImg} alt='danger' />
            </JoinWarning>
          </JoinLeft>
        </JoinNowWrapper>
        <Quote>
          <span>
            Standardowa edukacja zapewni ci przeżycie. Samokształcenie – fortunę. ~ Jim Rohn
          </span>
        </Quote>
      </MiddlePart>
      <Footer>
        {/* <FooterEntry /> */}
        <Copyright>Copyright &copy; 2022 All rights reserved by Mechan Web Dev</Copyright>
        <ToS href='#'>Regulamin</ToS>
        <FooterRight>
          {/* <span>Created by Marcel Betański</span> */}
          <span>Powered by Mechan Web Dev</span>
        </FooterRight>
      </Footer>
    </Wrapper>
  )
}

export default Home
