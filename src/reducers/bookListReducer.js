export default function bookListReducer(state=[], action) {
  switch(action.type) {
    case 'GET_BOOKS':
      return action.payload
    case 'ADD_BOOK':
      return [...state, action.payload]
    case 'DELETE_BOOK':
      return state.filter(function(item) {
        return !(item.title === action.payload.title && item.description === action.payload.description)
      })
    default: return state
  }
}
