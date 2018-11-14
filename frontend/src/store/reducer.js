import * as actionTypes from './actions';
import Immutable from 'immutable';

const initialState = {
    books: Immutable.OrderedMap(),
    authors:Immutable.OrderedMap()
};

const reducer = (state=initialState,action)=>
{
    switch(action.type){
      case actionTypes.ADD_BOOK:{
      let books=state.books.set(action.book.id,action.book);

      console.log("from reducer",books);
        return {
          ...state,
          books:books
          }
      }
      case actionTypes.UPDATE_BOOK:{
      let books=state.books.set(action.book.id,action.book);

      console.log("from reducer",books);
        return {
          ...state,
          books:books
          }
      }
      case actionTypes.FETCH_BOOKS:{
        return {
          ...state,
          books:action.books,
        }
      }
      case actionTypes.DELETE_BOOK:{
      let books=state.books.delete(action.bookid);

      console.log("from reducer",books);
        return {
          ...state,
          books:books
          }
      }
      case actionTypes.ADD_AUTHOR:{
        let authors=state.authors.set(action.authorid,action.author);
        return {
          ...state,
          authors:authors
        }
      }
      case actionTypes.FETCH_AUTHORS:{
        return {
          ...state,
          authors:action.authors
        }
      }
      default : return state;
    }
}

export default reducer;
