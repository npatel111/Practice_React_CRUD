export function getBooks() {
  return {
    type: "GET_BOOKS",
    payload: allBooks
  }
}

export function addBook(title, description) {
  return {
    type: "ADD_BOOK",
    payload: {title: title, description: description}
  }
}

export function deleteBook(title, description) {
  return {
    type: "DELETE_BOOK",
    payload: {title: title, description: description}
  }
}
