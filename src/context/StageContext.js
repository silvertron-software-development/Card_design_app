import { useReducer, createContext, useContext } from 'react'
import Reducer from '../Reducers/StageReducer'
import { v4 as uuidv4 } from 'uuid'
import { initialText } from '../helpers/textInitials'

const initialState = {
  shapes: [],
  textElements: [initialText],
  images: [],
  selectedElement: initialText.id,
  selectedType: 'text',
  globalZindex: 0,
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

  const findImage = (id) => {
    return state.images.find((el) => el.id === id)
  }

  const setSelectedElement = (id, type) => {
    dispatch({ type: 'SET_SELECTED_ELEMENT', payload: { id, type } })
  }

  const addShape = (newShape) => {
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

  const deleteTextElement = (id) => {
    dispatch({ type: 'DELETE_TEXT', payload: id })
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

  const deleteShape = (id) => {
    dispatch({ type: 'DELETE_SHAPE', payload: id })
  }

  const addImage = (values) => {
    console.log(values)
    dispatch({ type: 'ADD_IMAGE', payload: { ...values, id: uuidv4() } })
  }

  const changeImagePosition = (newPosition) => {
    const { x, y } = newPosition
    dispatch({ type: 'CHANGE_IMAGE_POSITION', payload: { x, y } })
  }

  const changeImageSize = (newSize) => {
    dispatch({ type: 'CHANGE_IMAGE_SIZE', payload: newSize })
  }

  const handleImagePropertyChange = (propertyName, newProperties, id) => {
    console.log(propertyName, newProperties, id)
    dispatch({
      type: 'CHANGE_IMAGE_PROPERTIES',
      payload: { propertyName, newProperties, id },
    })
  }

  const deleteImage = (id) => {
    dispatch({ type: 'DELETE_IMAGE', payload: id })
  }

  const handleZIndexChange = (elementArray, id, isIncreasing) => {
    let value = 0
    if (isIncreasing) {
      value = state.globalZindex + 1
    }
    console.log(elementArray, id, isIncreasing)
    dispatch({ type: 'CHANGE_Z_INDEX', payload: { elementArray, id, value } })
  }

  return (
    <StageContext.Provider
      value={{
        ...state,
        findTextElement,
        findShape,
        findImage,
        setSelectedElement,
        addShape,
        deleteTextElement,
        handleTextChange,
        addText,
        changePosition,
        handleTextPropertyChange,
        changeShapePosition,
        changeShapeSize,
        handleShapePropertyChange,
        deleteShape,
        addImage,
        changeImagePosition,
        changeImageSize,
        handleImagePropertyChange,
        deleteImage,
        handleZIndexChange,
      }}
    >
      {children}
    </StageContext.Provider>
  )
}
