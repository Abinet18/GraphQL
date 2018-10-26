import React, {Component} from 'react';
import { createFragmentContainer,graphql} from 'react-relay';


class author extends Component<Props> {

  render()
  {
    const {author}=this.props;
    return (<div className="authorCard">
      <p><strong>{author.name}</strong>,{author.age}
      ,from {author.birthPlace}</p>
      {author.books.map(book=>(
        <div class="bookCard"><p>{book.title}</p></div>
      ))}
    </div>)
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
