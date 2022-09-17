import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 50%;
  height: 100%;

  background-color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 8px solid #aaa;
  border-radius: 10px;

  div.stats-inner {
  }
`

export const Title = styled.span`
  font-size: 26px;
  font-weight: bold;

  margin-bottom: 20px;
`

export const StatsWrapper = styled.div`
  width: 90%;
  height: 75%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const StatsElement = styled.div`
  width: 80%;
  height: 35%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    text-align: left;
    font-weight: bold;
  }

  span.text {
    font-size: 0.8vw;
    color: #aaa;
  }

  span.subtext {
    font-size: 1vw;
  }

  &.score {
    span.subtext {
      font-size: 1.5vw;
    }
  }
`
