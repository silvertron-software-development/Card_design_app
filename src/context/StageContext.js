import { useReducer, createContext, useContext } from 'react'
import Reducer from '../Reducers/StageReducer'

const initialState = {
  shapes: [],
  textElements: [],
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

  return (
    <StageContext.Provider value={{ ...state, addShape }}>
      {children}
    </StageContext.Provider>
  )
}
