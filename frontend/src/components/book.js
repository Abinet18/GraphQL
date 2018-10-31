import React, {Component} from 'react';

import {createFragmentContainer,graphql} from 'react-relay';
import AddCommentMutation from '../mutations/AddCommentMutation';
class book extends Component
{
  state={comment:""};
  render()
  {
    const {book}=this.props;
    return (
      <div className="bookCard">
            <p><strong>{book.title}</strong>,{book.author.name}</p>
            <p>{book.description}</p>
            {book.comments.map(comment=>(
              <div className="commentCard">
                <em>{comment.user.fullname} {comment.comment}
            {comment.commentdate.toString()}</em></div>
          ))}
      <div className="commentCard">
        <input className="commentInput" type="text" value={this.state.comment} onChange={(e)=>this.setState({comment:e.target.value})}/>
        <button className="primary" onClick={this.submitComment}>comment</button></div>
    </div>);

  }

  submitComment=()=>
  {
    AddCommentMutation(this.props.book,localStorage.getItem("authToken"),this.state.comment);
  }
}

export default createFragmentContainer(book,graphql`
  fragment book_book on BookType {
    id
    title
    description
    author{name}
    comments{
      user{
        id
        fullname
      }
      comment
      commentdate
    }
  }
`);
