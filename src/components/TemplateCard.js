import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const TemplateCard = ({ title }) => {
  return (
    <>
      <Card>
        <li>
          <Link to='/editor'>{title}</Link>
        </li>
        {/* <p><Link to={`/${props.country.name}`}>DETAIL</Link></p> */}
      </Card>
    </>
  )
}

export default TemplateCard

const Card = styled.article`
  border-radius: 5px;
  box-shadow: 0px 30px 40px -20px hsl(229, 6%, 66%);
  padding: 30px;
  margin: 0 auto 20px auto;
  border-top: 3px solid hsl(229, 6%, 66%);
  display: flex;
  flex-flow: row wrap;
  align-items: flex-end;
  width: 75%;
`
