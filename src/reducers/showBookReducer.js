export default function showBookReducer(state = null, action) {
  switch(action.type) {
    case 'SHOW_BOOK':
      return {...state, selectedBook: action.payload}
    default: return state
  }
}
