import React from 'react';

class Comments extends React.Component
{

  render()
  {
    const {comments}=this.props;
    return (
    <div className="commentsCard">
    {comments.map(comment=>(
      <div className="commentFullCard">
        <em><span className="commenter">{comment.user.fullname}</span><span className="commentfull">  {comment.comment}</span>
    </em></div>))}
  </div>)
}
}

export default Comments;
