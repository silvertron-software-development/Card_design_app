import { Link } from 'react-router-dom';
import './TemplateCardStyles.css'

export const TemplateCard = (props) => {

    return <>
        <div className='list_element'>
                <li><Link to='/editor'>{ props.template.title }</Link></li>
                {/* <p><Link to={`/${props.country.name}`}>DETAIL</Link></p> */}
        </div>
    </>
}