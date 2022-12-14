import React from 'react'
import styled from 'styled-components'
import { BiText, BiCircle, BiImageAlt } from 'react-icons/bi'

const ElementSelect = ({ setSelectedElement }) => {
  return (
    <Wrapper>
      <span onClick={() => setSelectedElement('text')}>
        <BiText />
      </span>
      <span>
        <BiCircle onClick={() => setSelectedElement('shape')} />
      </span>
      <span className='img-input' onClick={() => setSelectedElement('image')}>
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

  .img-input {
    width: 100%;
    overflow: hidden;
  }
`
