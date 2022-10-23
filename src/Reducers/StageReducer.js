const StageReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_SHAPE':
      return { ...state, shapes: [...state.shapes, action.payload] }
    case 'ADD_TEXT':
      console.log(action.payload)
      return {
        ...state,
        textElements: [
          ...state.textElements,
          {
            text: '',
            id: action.payload.id,
            x: 140,
            y: 140,
            fill: 'transparent',
            align: 'center',
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
    default:
      return state
  }
}

export default StageReducer
