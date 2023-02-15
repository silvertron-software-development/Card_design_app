import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FiExternalLink } from 'react-icons/fi'

export const TemplateCard = ({ title }) => {
  return (
    <>
      <Wrapper>
        {/* <li key={key}> */}
          <Link to='/editor' className='has-text-weight-bold'>{title} <FiExternalLink/></Link>
        {/* </li> */}
      </Wrapper>
    </>
  )
}

export default TemplateCard

const Wrapper = styled.article`
list-style-type: none;
//   border-radius: 5px;
//   box-shadow: 0px 30px 40px -20px hsl(229, 6%, 66%);
//   padding: 30px;
//   margin: 0 auto 20px auto;
//   border-top: 3px solid hsl(229, 6%, 66%);
//   display: flex;
//   flex-flow: row wrap;
//   align-items: flex-end;
//   width: 75%;
`
