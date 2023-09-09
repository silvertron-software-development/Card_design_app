const StageReducer = (state, action) => {
	switch (action.type) {
		case 'SET_ACTIVE_SIDE':
			return {
				...state,
				isFrontSideActive: action.payload,
				selectedElement: null,
				selectedType: null
			}
		case 'SET_PDF_URL':
			return { ...state, pdfUrl: action.payload.url }
		case 'SET_SELECTED_ELEMENT':
			return {
				...state,
				selectedElement: action.payload.id,
				selectedType: action.payload.type
			}
		case 'ADD_SHAPE':
			return {
				...state,
				[action.payload.cardSide]: {
					...state[action.payload.cardSide],
					shapes: [
						...state[action.payload.cardSide].shapes,
						{
							...action.payload,
							x: 250,
							y: 140,
							fill: 'transparent',
							stroke: 'black'
						}
					]
				}
			}

		case 'ADD_TEXT':
			console.log(action.payload)
			return {
				...state,
				[action.payload.cardSide]: {
					...state[action.payload.cardSide],
					textElements: [
						...state[action.payload.cardSide].textElements,
						{
							id: action.payload.id,
							text: '',
							x: 140,
							y: 140,
							align: 'center',
							fontStyle: '',
							fontSize: 16,
							textDecoration: '',
							fontFamily: 'Abel',
							fill: '#2551B0'
						}
					]
				}
			}
		case 'CHANGE_TEXT':
			return {
				...state,
				[action.payload.cardSide]: {
					...state[action.payload.cardSide],
					textElements: [
						...state[action.payload.cardSide].textElements.map((el) => {
							return el.id !== action.payload.id
								? el
								: { ...el, text: action.payload.newText }
						})
					]
				}
			}
		case 'CHANGE_POSITION':
			return {
				...state,
				[action.payload.cardSide]: {
					...state[action.payload.cardSide],
					textElements: [
						...state[action.payload.cardSide].textElements.map((el) => {
							return el.id !== action.payload.id
								? el
								: { ...el, x: action.payload.x, y: action.payload.y }
						})
					]
				}
			}
		case 'CHANGE_TEXT_PROPERTIES':
			return {
				...state,
				[action.payload.cardSide]: {
					...state[action.payload.cardSide],
					textElements: [
						...state[action.payload.cardSide].textElements.map((el) => {
							return el.id !== action.payload.id
								? el
								: {
										...el,
										[action.payload.propertyName]: action.payload.newProperties
								  }
						})
					]
				}
			}
		case 'DELETE_TEXT':
			return {
				...state,
				selectedType: null,
				selectedElement: null,
				[action.payload.cardSide]: {
					...state[action.payload.cardSide],
					textElements: [
						...state[action.payload.cardSide].textElements.filter(
							(el) => el.id !== action.payload.id
						)
					]
				}
			}
		case 'CHANGE_SHAPE_POSITION':
			return {
				...state,
				[action.payload.cardSide]: {
					...state[action.payload.cardSide],
					shapes: [
						...state[action.payload.cardSide].shapes.map((el) => {
							return el.id !== action.payload.id
								? el
								: { ...el, x: action.payload.x, y: action.payload.y }
						})
					]
				}
			}
		case 'CHANGE_SHAPE_PROPERTIES':
			return {
				...state,
				[action.payload.cardSide]: {
					...state[action.payload.cardSide],
					shapes: [
						...state[action.payload.cardSide].shapes.map((el) => {
							return el.id !== action.payload.id
								? el
								: {
										...el,
										[action.payload.propertyName]: action.payload.newProperties
								  }
						})
					]
				}
			}
		case 'CHANGE_SHAPE_SIZE':
			return {
				...state,
				[action.payload.cardSide]: {
					...state[action.payload.cardSide],
					shapes: [
						...state[action.payload.cardSide].shapes.map((el) => {
							return el.id !== action.payload.id
								? el
								: {
										...el,
										height: action.payload.height,
										width: action.payload.width,
										x: action.payload.x,
										y: action.payload.y
								  }
						})
					]
				}
			}
		case 'DELETE_SHAPE':
			return {
				...state,
				selectedType: null,
				selectedElement: null,
				[action.payload.cardSide]: {
					...state[action.payload.cardSide],
					shapes: [
						...state[action.payload.cardSide].shapes.filter(
							(el) => el.id !== action.payload.id
						)
					]
				}
			}
		case 'ADD_IMAGE':
			return {
				...state,
				[action.payload.cardSide]: {
					...state[action.payload.cardSide],
					images: [
						...state[action.payload.cardSide].images,
						{
							src: action.payload.src,
							width: 100,
							height: 100,
							id: action.payload.id,
							x: 150,
							y: 150,
							fill: action.payload.fill,
							lineCap: action.payload.lineCap,
							isPhoto: action.payload.isPhoto || false
						}
					]
				}
			}
		case 'CHANGE_IMAGE_POSITION':
			return {
				...state,
				[action.payload.cardSide]: {
					...state[action.payload.cardSide],
					images: [
						...state[action.payload.cardSide].images.map((el) => {
							return el.id !== action.payload.id
								? el
								: { ...el, x: action.payload.x, y: action.payload.y }
						})
					]
				}
			}
		case 'CHANGE_IMAGE_SIZE':
			return {
				...state,
				[action.payload.cardSide]: {
					...state[action.payload.cardSide],
					images: [
						...state[action.payload.cardSide].images.map((el) => {
							return el.id !== action.payload.id
								? el
								: {
										...el,
										height: action.payload.height,
										width: action.payload.width,
										x: action.payload.x,
										y: action.payload.y
								  }
						})
					]
				}
			}
		case 'CHANGE_IMAGE_PROPERTIES':
			return {
				...state,
				[action.payload.cardSide]: {
					...state[action.payload.cardSide],
					images: [
						...state[action.payload.cardSide].images.map((el) => {
							return el.id !== action.payload.id
								? el
								: {
										...el,
										[action.payload.propertyName]: action.payload.newProperties
								  }
						})
					]
				}
			}
		case 'CHANGE_IMAGE_FILTERS':
			return {
				...state,
				[action.payload.cardSide]: {
					...state[action.payload.cardSide],
					images: [
						...state[action.payload.cardSide].images.map((el) => {
							return el.id !== action.payload.id
								? el
								: {
										...el,
										red: action.payload.rgbaArray[0],
										green: action.payload.rgbaArray[1],
										blue: action.payload.rgbaArray[2],
										alpha: action.payload.rgbaArray[3]
								  }
						})
					]
				}
			}
		case 'DELETE_IMAGE':
			return {
				...state,
				selectedType: null,
				selectedElement: null,
				[action.payload.cardSide]: {
					...state[action.payload.cardSide],
					images: [
						...state[action.payload.cardSide].images.filter(
							(el) => el.id !== action.payload.id
						)
					]
				}
			}
		default:
			return state
	}
}

export default StageReducer
