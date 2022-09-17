import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 90%;
  height: 80%;

  background-color: #4ce0b3;

  border: ${({ selected }) => (selected === 'selected' ? '4px solid #EC0B43' : '4px solid #aaa')};
  border-radius: 20px;

  place-self: center;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 22px;

  cursor: pointer;

  position: relative;

  &::after {
    content: '';

    display: ${({ selected }) => (selected === 'selected' ? 'block' : 'none')};

    width: 25px;
    height: 25px;

    position: absolute;

    background-color: #ec0b43;

    top: -10px;
    right: -10px;

    border: none;
    border-radius: 20px;
  }
`
