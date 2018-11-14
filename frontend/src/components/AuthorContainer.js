import React, {Component} from 'react';
import {graphql,fetchQuery} from 'react-relay';
import environment from '../Environment';
import { connect } from 'react-redux';

import AuthorList  from './AuthorList';
import * as actionTypes from '../store/actions';


class AuthorContainer extends Component {
  componentDidMount()
  {
  if(this.props.authors.size==0){
    actionTypes.fetchAuthors(this.props.onFetchAuthors);
  }
}

  render(){
  return (
        <div>
          <p className="heading">Authors</p>
        {this.props.authors.size>0?<AuthorList authors={this.props.authors}/>:''}
        </div>
      )
    }

}

const mapStateToProps= (state)=> {
  return {
      authors: state.authors
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    onFetchAuthors : authors => dispatch({type:actionTypes.FETCH_AUTHORS,authors:authors}),
    onAddAuthor : author=> dispatch({type:actionTypes.ADD_AUTHOR,author:author})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AuthorContainer);
