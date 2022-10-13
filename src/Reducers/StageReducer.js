const StageReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_SHAPE':
      return { ...state, shapes: [...state.shapes, action.payload] }
    default:
      return state
  }
}

export default StageReducer
