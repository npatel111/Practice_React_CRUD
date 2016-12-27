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
//     Ok, so for handle delete - what you want is a component that handles deleting itself.
//     So what you do is first create an element with an id, for example:
    
//     todos.map(function(todo){
//         return <Todo id={todo.id}/>
//    }
    
//     Then when someone clicks on the id, you find the id prop of that specific todo, and dispatch an action of 
//     {type: 'DELETE_TODO', payload: 2} for deleting the second todo.
    
//     So imagine your todo now looks like 
//     class Todo extends Component {
//             handleOnClick(){
//               this.props.deleteTodo(this.props.id)
//             }
//         render(){
//            return <div onClick={this.handleOnClick}> {this.props.text}</div>
//    }
//   }
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
