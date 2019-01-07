import React, {Component} from 'react';
import { createFragmentContainer,graphql} from 'react-relay';
import DeleteAuthorMutation from '../mutations/DeleteAuthorMutation';

class author extends Component<Props> {
state={showBook:null};
  render()
  {
    const {author}=this.props;
    return (
    <div className="authorCard">
      <p><strong>{author.name}</strong>,{author.age}
      ,from {author.birthPlace}</p>
      {author.books.map(book=>(
        <div><p className="author-book-class">{book.title}</p></div>
      ))}
      <div>
        <button class="primary deleteButton" onClick={this.onDelete}>Delete</button>
      </div>
    </div>)
  }

  onDelete=()=>{
    DeleteAuthorMutation(this.props.author);
  }


}

export default createFragmentContainer(author,graphql`
fragment author_author on AuthorType {
  id
  name
  age
  birthPlace
  books
  {
    title
  }
}
`);
