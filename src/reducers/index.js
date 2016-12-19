import { combineReducers } from 'redux';
import bookListReducer from './bookListReducer'
import showBookReducer from './showBookReducer'

const rootReducer = combineReducers({
  allBooks: bookListReducer,
  selectedBook: showBookReducer
});

export default rootReducer;
