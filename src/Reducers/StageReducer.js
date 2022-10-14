const StageReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_SHAPE':
      return { ...state, shapes: [...state.shapes, action.payload] }
    case 'ADD_TEXT':
      return {
        ...state,
        textElements: [...state.textElements, { text: '', id: action.payload }],
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
    default:
      return state
  }
}

export default StageReducer
