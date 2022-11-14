const StageReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SELECTED_ELEMENT':
      return {
        ...state,
        selectedElement: action.payload.id,
        selectedType: action.payload.type,
      }
    case 'ADD_SHAPE':
      return {
        ...state,
        shapes: [
          ...state.shapes,
          {
            ...action.payload,
            x: 250,
            y: 140,
            fill: 'transparent',
            stroke: 'black',
          },
        ],
      }

    case 'ADD_TEXT':
      return {
        ...state,
        textElements: [
          ...state.textElements,
          {
            text: '',
            id: action.payload.id,
            x: 140,
            y: 140,
            align: 'center',
            fontStyle: '',
            fontSize: 16,
            textDecoration: '',
            fontFamily: 'arial',
            fill: '#2551B0',
          },
        ],
      }
    case 'CHANGE_TEXT':
      return {
        ...state,
        textElements: [
          ...state.textElements.map((el) => {
            return el.id !== action.payload.id
              ? el
              : { ...el, text: action.payload.newText }
          }),
        ],
      }
    case 'CHANGE_POSITION':
      return {
        ...state,
        textElements: [
          ...state.textElements.map((el) => {
            return el.id !== action.payload.id
              ? el
              : { ...el, x: action.payload.x, y: action.payload.y }
          }),
        ],
      }
    case 'CHANGE_TEXT_PROPERTIES':
      return {
        ...state,
        textElements: [
          ...state.textElements.map((el) => {
            return el.id !== action.payload.id
              ? el
              : {
                  ...el,
                  [action.payload.propertyName]: action.payload.newProperties,
                }
          }),
        ],
      }
    case 'CHANGE_SHAPE_POSITION':
      return {
        ...state,
        shapes: [
          ...state.shapes.map((el) => {
            return el.id !== action.payload.id
              ? el
              : { ...el, x: action.payload.x, y: action.payload.y }
          }),
        ],
      }
    case 'CHANGE_SHAPE_PROPERTIES':
      return {
        ...state,
        shapes: [
          ...state.shapes.map((el) => {
            return el.id !== action.payload.id
              ? el
              : {
                  ...el,
                  [action.payload.propertyName]: action.payload.newProperties,
                }
          }),
        ],
      }
    case 'CHANGE_SHAPE_SIZE':
      console.log(action.payload)
      return {
        ...state,
        shapes: [
          ...state.shapes.map((el) => {
            return el.id !== action.payload.id
              ? el
              : {
                  ...el,
                  height: action.payload.height,
                  width: action.payload.width,
                  strokeWidth: el.strokeWidth,
                  x: action.payload.x,
                  y: action.payload.y,
                }
          }),
        ],
      }
    default:
      return state
  }
}

export default StageReducer
