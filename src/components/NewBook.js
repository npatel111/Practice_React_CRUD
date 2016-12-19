import React, { Component } from 'react';
import { connect} from 'react-redux'

// import { getBooks } from '../actions/bookListActions';
import { addBook } from '../actions/bookListActions';
// import * as actions from '../actions/bookListActions';
import { bindActionCreators } from 'redux';

class NewBook extends Component {
  constructor(props) {
    super(props)
  }

  submitBook(event) {
    event.preventDefault()
    let title = event.target.children[2].value
    let description = event.target.children[6].value
    this.props.addBook(title, description)
  }

  render() {
    return (
      <form onSubmit={this.submitBook.bind(this)}>
        <label>Title:</label><br />
        <input type="text" placeholder="add book title" /><br />
        <label>Description:</label><br />
        <input type="text" placeholder="add description" /><br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addBook }, dispatch)
}
const connector = connect(null, mapDispatchToProps)
const NewBookComponent = connector(NewBook)

export default NewBookComponent;
