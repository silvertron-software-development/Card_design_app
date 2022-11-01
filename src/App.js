import { CardEditor } from './Pages/CardEditor'
import { TemplateSelect } from './Pages/TemplateSelect'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <>
      {/* <CardEditor /> */}

      <Router>
        <Switch>
          <Route path='/editor' component={CardEditor} />
          <Route path='/'>
            <TemplateSelect />
          </Route>
        </Switch>
      </Router>
    </>
  )
}
