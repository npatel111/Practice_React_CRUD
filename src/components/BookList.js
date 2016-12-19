import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { deleteBook } from '../actions/bookListActions'
import { showBook } from '../actions/bookListActions'

class BookList extends Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleShow = this.handleShow.bind(this)
  }

  handleDelete(event) {
    let title = event.target.parentElement.children[3].textContent
    let description = event.target.parentElement.children[5].textContent
    this.props.deleteBook(title, description)
  }

  handleShow(event) {
    debugger
    let title = event.target.parentElement.children[3].textContent
    let description = event.target.parentElement.children[5].textContent
    this.props.showBook(title, description)
    console.log("please work")
    debugger


  }

  render() {
    return (
        <ul>
          {this.props.allBooks.map((book,i) => {
            return (
              <li key={i}>
                <button onClick={this.handleShow}>Show details </button><button onClick={this.handleDelete}>Delete </button> {book.title} {book.description}
              </li>
            )
          })}
        </ul>
    );
  }
}

function mapStateToProps(state) {
  return { selectedBook: state.selectedBook}
  debugger
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteBook, showBook }, dispatch)
}
const connector = connect(mapStateToProps, mapDispatchToProps)
const BookListComponent = connector(BookList)

export default BookListComponent;
