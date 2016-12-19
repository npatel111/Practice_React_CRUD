import React, { Component } from 'react';
import { connect} from 'react-redux'
import BookList from './BookList'
import NewBookComponent from './NewBook'
import { getBooks } from '../actions/bookListActions';
import showSelectedBook from './showSelectedBook'
// import { addBook } from '../actions/bookListActions';
// import * as actions from '../actions/bookListActions';

import { bindActionCreators } from 'redux';

class App extends Component {
  constructor() {
    super()
  }


  render() {
    return (
      <div>
        <NewBookComponent />
        <div>List of books</div>
        <BookList allBooks={this.props.allBooks} />
        <showSelectedBook />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {allBooks: state.allBooks}
}

const connector = connect(mapStateToProps)
const connectedComponent = connector(App)

export default connectedComponent;
