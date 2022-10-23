import { useReducer, createContext, useContext } from 'react'
import Reducer from '../Reducers/StageReducer'
import { v4 as uuidv4 } from 'uuid'

const initialState = {
  shapes: [],
  textElements: [{ id: 'asdasasd', text: '', align: 'center' }],
  selectedShape: null,
  selectedType: null,
}

const StageContext = createContext()

export const useStage = () => useContext(StageContext)

export const StageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState)

  const addShape = (newShape) => {
    dispatch({ type: 'ADD_SHAPE', payload: newShape })
  }

  const addText = () => {
    dispatch({ type: 'ADD_TEXT', payload: { id: uuidv4() } })
  }

  const handleTextChange = (newText, id) => {
    dispatch({ type: 'CHANGE_TEXT', payload: { newText, id } })
  }

  const changePosition = (newPosition) => {
    dispatch({ type: 'CHANGE_POSITION', payload: newPosition })
  }

  return (
    <StageContext.Provider
      value={{ ...state, addShape, handleTextChange, addText, changePosition }}
    >
      {children}
    </StageContext.Provider>
  )
}
