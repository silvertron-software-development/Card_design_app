import { CardEditor } from './Pages/CardEditor'
import { TemplateSelect } from './Pages/TemplateSelect'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/editor' element={<CardEditor />} />
          <Route path='/' element={<TemplateSelect />} />
        </Routes>
      </Router>
    </>
  )
}
