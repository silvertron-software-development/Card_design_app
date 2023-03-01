import { useReducer, createContext, useContext } from 'react'
import Reducer from '../Reducers/StageReducer'
import { v4 as uuidv4 } from 'uuid'
import { initialText, initialText2 } from '../helpers/textInitials'

const initialState = {
	frontSideCard: {
		shapes: [],
		textElements: [initialText],
		images: []
	},
	backSideCard: {
		shapes: [],
		textElements: [initialText2],
		images: []
	},
	isFrontSideActive: true,
	selectedElement: initialText.id,
	selectedType: 'text',
	globalZindex: 0,
	pdfUrl: null
}

const StageContext = createContext()

export const useStage = () => useContext(StageContext)

export const StageProvider = ({ children }) => {
	const [state, dispatch] = useReducer(Reducer, initialState)

	const getSide = () =>
		state.isFrontSideActive ? 'frontSideCard' : 'backSideCard'

	const setPDFUrl = (url) => {
		dispatch({ type: 'SET_PDF_URL', payload: { url } })
	}

	const setActiveSide = () => {
		console.log(!state.isFrontSideActive)
		dispatch({ type: 'SET_ACTIVE_SIDE', payload: !state.isFrontSideActive })
	}

	const findTextElement = (id) => {
		const cardSide = getSide()
		return state[cardSide].textElements.find((el) => el.id === id)
	}

	const findShape = (id) => {
		const cardSide = getSide()
		return state[cardSide].shapes.find((el) => el.id === id)
	}

	const findImage = (id) => {
		const cardSide = getSide()
		return state[cardSide].images.find((el) => el.id === id)
	}

	const setSelectedElement = (id, type) => {
		const cardSide = getSide()
		dispatch({ type: 'SET_SELECTED_ELEMENT', payload: { cardSide, id, type } })
	}

	const addShape = (newShape) => {
		const cardSide = getSide()
		dispatch({
			type: 'ADD_SHAPE',
			payload: { ...newShape, id: uuidv4(), cardSide }
		})
	}

	const addText = () => {
		const cardSide = getSide()
		dispatch({ type: 'ADD_TEXT', payload: { cardSide, id: uuidv4() } })
	}

	const handleTextChange = (newText, id) => {
		const cardSide = getSide()
		dispatch({ type: 'CHANGE_TEXT', payload: { cardSide, newText, id } })
	}

	const handleTextPropertyChange = (propertyName, newProperties, id) => {
		const cardSide = getSide()
		dispatch({
			type: 'CHANGE_TEXT_PROPERTIES',
			payload: { propertyName, newProperties, id, cardSide }
		})
	}

	const deleteTextElement = (id) => {
		const cardSide = getSide()
		dispatch({ type: 'DELETE_TEXT', payload: { id, cardSide } })
	}

	const changePosition = (newPosition) => {
		const cardSide = getSide()
		newPosition = { ...newPosition, cardSide }
		dispatch({ type: 'CHANGE_POSITION', payload: newPosition })
	}

	const changeShapePosition = (newPosition) => {
		const cardSide = getSide()
		newPosition = { ...newPosition, cardSide }
		dispatch({ type: 'CHANGE_SHAPE_POSITION', payload: newPosition })
	}

	const handleShapePropertyChange = (propertyName, newProperties, id) => {
		const cardSide = getSide()
		dispatch({
			type: 'CHANGE_SHAPE_PROPERTIES',
			payload: { propertyName, newProperties, id, cardSide }
		})
	}

	const changeShapeSize = (newSize) => {
		const cardSide = getSide()
		newSize = { ...newSize, cardSide }
		dispatch({ type: 'CHANGE_SHAPE_SIZE', payload: newSize })
	}

	const deleteShape = (id) => {
		const cardSide = getSide()
		dispatch({ type: 'DELETE_SHAPE', payload: { id, cardSide } })
	}

	const addImage = (values) => {
		const cardSide = getSide()
		dispatch({
			type: 'ADD_IMAGE',
			payload: { ...values, id: uuidv4(), cardSide }
		})
	}

	const changeImagePosition = (newPosition) => {
		const { x, y, id } = newPosition
		const cardSide = getSide()
		dispatch({ type: 'CHANGE_IMAGE_POSITION', payload: { x, y, id, cardSide } })
	}

	const changeImageSize = (newSize) => {
		const cardSide = getSide()
		newSize = { ...newSize, cardSide }
		dispatch({ type: 'CHANGE_IMAGE_SIZE', payload: newSize })
	}

	const handleImagePropertyChange = (propertyName, newProperties, id) => {
		const cardSide = getSide()
		dispatch({
			type: 'CHANGE_IMAGE_PROPERTIES',
			payload: { propertyName, newProperties, id, cardSide }
		})
	}

	const handleImageFilterChange = (rgbaArray, id) => {
		const cardSide = getSide()
		dispatch({
			type: 'CHANGE_IMAGE_FILTERS',
			payload: { rgbaArray, id, cardSide }
		})
	}

	const deleteImage = (id) => {
		const cardSide = getSide()
		dispatch({ type: 'DELETE_IMAGE', payload: { id, cardSide } })
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
				setActiveSide,
				setPDFUrl,
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
				handleImageFilterChange,
				deleteImage,
				handleZIndexChange
			}}
		>
			{children}
		</StageContext.Provider>
	)
}
