import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { deleteBook } from '../actions/bookListActions'

class BookList extends Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(event) {
    console.log("does this work")
    let title = event.target.parentElement.children[2].textContent
    let description = event.target.parentElement.children[4].textContent
    this.props.deleteBook(title, description)
  }

  render() {
    return (
        <ul>
          {this.props.allBooks.map((book,i) => {
            return (
              <li key={i}>
                <button onClick={this.handleDelete}>Delete </button> {book.title}
              </li>
            )
          })}
        </ul>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteBook }, dispatch)
}
const connector = connect(null, mapDispatchToProps)
const BookListComponent = connector(BookList)

export default BookListComponent;
