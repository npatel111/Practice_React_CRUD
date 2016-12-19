export default function showBookReducer(state = [], action) {
  debugger

  switch(action.type) {
    case 'SHOW_BOOK':
      return [...state, action.payload]
      console.log("fd")
    default: return state
  }
}
