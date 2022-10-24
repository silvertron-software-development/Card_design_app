import React from 'react'
import styled from 'styled-components'
import { BiText, BiCircle, BiImageAlt } from 'react-icons/bi'

const ElementSelect = () => {
  return (
    <Wrapper>
      <span>
        <BiText />
      </span>
      <span>
        <BiCircle />
      </span>
      <span>
        <BiImageAlt />
      </span>
    </Wrapper>
  )
}

export default ElementSelect

const Wrapper = styled.div`
  width: 10%;
  padding: 1rem;
  display: grid;
  grid-gap: 0.4rem;
  font-size: 2.5rem;
  align-content: center;
  justify-content: center;

  span {
    cursor: pointer;
    width: fit-content;
    text-align: center;
    padding: 0.2rem;
    vertical-align: center;
  }
`
