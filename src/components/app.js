import React, { Component } from 'react';
import { connect} from 'react-redux'
import BookListComponent from './BookList'
import NewBookComponent from './NewBook'
import { getBooks } from '../actions/bookListActions';
import showSelectedBook from './showSelectedBook'
// import { addBook } from '../actions/bookListActions';
// import * as actions from '../actions/bookListActions';

import { bindActionCreators } from 'redux';

class App extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div>
        <NewBookComponent />
        <div>List of books</div>
        <BookListComponent allBooks={this.props.allBooks} selectedBook={this.props.selectedBook}/>
        <showSelectedBook />
      </div>
    );
  }
}

function mapStateToProps(state) {
  debugger
  return {allBooks: state.allBooks, selectedBook: state.selectedBook}
}

const connector = connect(mapStateToProps)
const connectedComponent = connector(App)

export default connectedComponent;
