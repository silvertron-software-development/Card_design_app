import { Link } from 'react-router-dom';
import { TemplateCard } from '../components/TemplateCard';
import styled from 'styled-components';

export const TemplateSelect = () => {

    let templates = [{
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
            <TemplateCard key={template.id} title={template.title}/>
        )}
    </ul>

        <ListParagraph><Link to='editor'>BLANK CANVAS</Link></ListParagraph>
    </>
}

export default TemplateSelect

const ListParagraph = styled.p`
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