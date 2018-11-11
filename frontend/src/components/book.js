import React, {Component} from 'react';
import Immutable from "immutable";
import Modal from './Modal';
import {createFragmentContainer,graphql} from 'react-relay';
import AddCommentMutation from '../mutations/AddCommentMutation';
import DeleteBookMutation from '../mutations/DeleteBookMutation';
import UpdateBook from './UpdateBook';
import Comments from './Comments';
class Book extends Component
{
  state={
        comment:"",
        showUpdateModal:false,
        showCommentsModal:false,
        showDetailsModal:false
      };
  render()
  {
    const {book,detail}=this.props;
    const comments=Immutable.List(book.comments).sortBy(comment=>comment.commentdate).reverse();


    const numberOfComments=comments.size;
    const showComments=numberOfComments>3 && detail!==true ?comments.slice(0,3):comments
    const commentClass=detail===true?"commentfull":"comment";

    return (
      <div className="bookCard">
            <p><strong>{book.title}</strong>,{book.author && book.author.name?book.author.name:''}</p>
            <p>{book.description}</p>
            {showComments.map(comment=>(
              <div className="commentCard">
                <em><span className="commenter">{comment.user.fullname}</span><span className={commentClass}>  {comment.comment}</span>
            </em></div>
          ))}
          {numberOfComments>3 && detail!==true ?<div className="commentCard"><span><button className="primary wideButton" onClick={this.showMoreComments}>Show All Comments</button></span></div>:null}
      <div className="commentCard">
        <input className="commentInput" type="text" value={this.state.comment} onChange={(e)=>this.setState({comment:e.target.value})}/>
        <button className="primary" onClick={this.submitComment}>comment</button>
      </div>

    <div>
      <button className="primary" onClick={this.onUpdate}>Update</button>
      <button className="primary deleteButton" onClick={this.onDelete}>Delete</button>
      {detail!==true?<button className="primary" onClick={this.showDetails}>Full View</button>:''}
    </div>
    <Modal show={this.state.showUpdateModal} onClose={this.onUpdateClose}>
      <UpdateBook book={this.props.book} onClose={this.onUpdateClose}/>
    </Modal>
    <Modal show={this.state.showCommentsModal} onClose={this.onCommentsClose}>
    <Comments comments={comments}/>
  </Modal>
  <Modal show={this.state.showDetailsModal} onClose={this.onDetailsClose}>
  <Book book={book} detail={true}/>
</Modal>
  </div>
  );

  }

  submitComment=()=>
  {
    AddCommentMutation(this.props.book,localStorage.getItem("authToken"),this.state.comment);
    this.setState({comment:""});
  }
  onDelete=()=>{
    DeleteBookMutation(this.props.book);
  }
  onUpdate=()=>{
    this.setState({showUpdateModal:true});
  }
  onUpdateClose=()=>{
    this.setState({showUpdateModal:false});
  }
  showMoreComments=()=>
  {
    this.setState({showCommentsModal:true});
  }
  onCommentsClose=()=>
  {
    this.setState({showCommentsModal:false});
  }
  showDetails=()=>
  {
    this.setState({showDetailsModal:true});
  }
  onDetailsClose=()=>
  {
    this.setState({showDetailsModal:false});
  }

}

export default createFragmentContainer(Book,graphql`
  fragment Book_book on BookType {
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
