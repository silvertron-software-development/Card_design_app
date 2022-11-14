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

  const findShape = (id) => {
    return state.shapes.find((el) => el.id === id)
  }

  const setSelectedElement = (id, type) => {
    dispatch({ type: 'SET_SELECTED_ELEMENT', payload: { id, type } })
  }

  const addShape = (newShape) => {
    console.log(newShape)
    dispatch({
      type: 'ADD_SHAPE',
      payload: { ...newShape, id: uuidv4() },
    })
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
      payload: { propertyName, newProperties, id: id },
    })
  }

  const changePosition = (newPosition) => {
    dispatch({ type: 'CHANGE_POSITION', payload: newPosition })
  }

  const changeShapePosition = (newPosition) => {
    dispatch({ type: 'CHANGE_SHAPE_POSITION', payload: newPosition })
  }

  const handleShapePropertyChange = (propertyName, newProperties, id) => {
    console.log(newProperties)
    dispatch({
      type: 'CHANGE_SHAPE_PROPERTIES',
      payload: { propertyName, newProperties, id },
    })
  }

  const changeShapeSize = (newSize) => {
    dispatch({ type: 'CHANGE_SHAPE_SIZE', payload: newSize })
  }

  return (
    <StageContext.Provider
      value={{
        ...state,
        findTextElement,
        findShape,
        setSelectedElement,
        addShape,
        handleTextChange,
        addText,
        changePosition,
        handleTextPropertyChange,
        changeShapePosition,
        changeShapeSize,
        handleShapePropertyChange,
      }}
    >
      {children}
    </StageContext.Provider>
  )
}
