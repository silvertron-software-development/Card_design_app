import { Link } from 'react-router-dom';
import { TemplateCard } from '../components/TemplateCard';
import '../components/TemplateCardStyles.css'

export const TemplateSelect = () => {

    var templates = [{
        "id": 1,
        "title": "Template1"
      }, {
        "id": 2,
        "title": "Template2"
      }, {
        "id": 3,
        "title": "Template3"
      }];

    return <>

    <ul>
        { templates.map( template =>
            <TemplateCard key={template.id} className='list_element' template={template}/>
        )}
    </ul>

        <p className='list_element'><Link to='editor'>BLANK CANVAS</Link></p>
    </>
}