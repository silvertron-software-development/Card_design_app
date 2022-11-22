import React from 'react'
import styled from 'styled-components'

const ImageImport = () => {
  return (
    <Wrapper>
      <input type='file' name='file' id='file' className='inputfile' />
      <label for='file'>Selecciona un archivo</label>
      <hr />
      <h6>Subidos recientemente</h6>
    </Wrapper>
  )
}

export default ImageImport

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  .inputfile {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }

  .inputfile + label {
    font-weight: 400;
    color: white;
    background-color: black;
    padding: 0.5rem;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }

  .inputfile + label {
    cursor: pointer; /* "hand" cursor */
  }
`
