//mapping of what url to show for what component
import React from 'react'
import { Route, IndexRoute } from 'react-router'
//Route defines match between URL and component
import App from './components/app'
import BookList from './components/BookList'
import NewBook from './components/NewBook'
import showSelectedBook from './components/showSelectedBook'

export default (
  <Route path="/" component={App} >
    <IndexRoute component={BookList} />
    <Route path="books/:id" component={showSelectedBook} />
  </Route>
)
