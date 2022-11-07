import { useReducer, createContext, useContext } from 'react'
import Reducer from '../Reducers/StageReducer'
import { v4 as uuidv4 } from 'uuid'
import { initialText } from '../helpers/textInitials'

const initialState = {
  shapes: [],
  textElements: [initialText],
  selectedElement: initialText,
  selectedType: null,
}

const StageContext = createContext()

export const useStage = () => useContext(StageContext)

export const StageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState)

  const findTextElement = (id) => {
    return state.textElements.find((el) => el.id === id)
  }

  const addShape = (newShape) => {
    dispatch({ type: 'ADD_SHAPE', payload: newShape })
  }

  const addText = () => {
    dispatch({ type: 'ADD_TEXT', payload: { id: uuidv4() } })
  }

  const handleTextChange = (newText, id) => {
    dispatch({ type: 'CHANGE_TEXT', payload: { newText, id } })
  }

  const handleTextPropertyChange = (propertyName, newProperties, id) => {
    dispatch({
      type: 'CHANGE_TEXT_PROPERTIES',
      payload: { propertyName, newProperties, id: 'asdasasd' },
    })
  }

  const changePosition = (newPosition) => {
    dispatch({ type: 'CHANGE_POSITION', payload: newPosition })
  }

  return (
    <StageContext.Provider
      value={{
        ...state,
        findTextElement,
        addShape,
        handleTextChange,
        addText,
        changePosition,
        handleTextPropertyChange,
      }}
    >
      {children}
    </StageContext.Provider>
  )
}
