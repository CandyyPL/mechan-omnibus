import React from 'react'
import {
  Board,
  JoinMotto,
  JoinMottoButton,
  LeftSide,
  Main,
  MainBottom,
  RightSide,
  Smoke,
  Student,
  Wrapper,
} from 'components/TopPart/TopPart.styles'
import studentImg from 'assets/student.png'
import lightsImg from 'assets/lights.png'

const TopPart = () => {
  const handleScrollToJoin = () => {
    window.scrollTo({
      top: 850,
      behavior: 'smooth',
    })
  }

  return (
    <Wrapper>
      <Main>
        <LeftSide>
          <JoinMotto>
            NIE CZEKAJ, <JoinMottoButton onClick={handleScrollToJoin}>DOŁĄCZ</JoinMottoButton> JUŻ
            TERAZ
          </JoinMotto>
          <Student>
            <Smoke>Mechan4ever!</Smoke>
            <img src={studentImg} alt='student' />
          </Student>
        </LeftSide>
        <RightSide>
          <Board>
            <p>Witaj w Omnibusie!</p>
            <p>
              Jest to platforma quizowa <br /> Zespołu Szkół Technicznych w Pile. <br /> Odpowiadaj
              na pytania z zakresu języków obcych, matematyki, historii oraz informatyki, zdobywaj
              punkty i awansuj w rankingu!
            </p>
            <img src={lightsImg} alt='lights' />
          </Board>
        </RightSide>
      </Main>
      <MainBottom />
    </Wrapper>
  )
}

export default TopPart
