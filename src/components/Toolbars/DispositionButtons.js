import React from 'react'
import { HiArrowSmUp, HiArrowSmDown } from 'react-icons/hi'
import styled from 'styled-components'

const DispositionButtons = ({ bringUp, bringDown }) => {
  return (
    <Wrapper>
      <button className='disp-btn' type='button' onClick={bringUp}>
        Traer al frente
        <HiArrowSmUp />
      </button>

      <button className='disp-btn' onClick={bringDown}>
        Enviar atras
        <HiArrowSmDown />
      </button>
    </Wrapper>
  )
}

export default DispositionButtons

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-basis: 13%;

  .disp-btn {
    display: flex;
    align-items: center;
    font-size: 0.7rem;
    padding: 0.2rem;
    cursor: pointer;
    border: none;
    background-color: lightgrey;
    color: black;
    border-radius: 1rem;
  }

  .disp-btn:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }
`
