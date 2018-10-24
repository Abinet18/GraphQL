import React, {Component} from 'react';

class authors extends Component {
  render(){
    const authors=[{name:"Abinet Tafa",age:30,birthPlace:"Goba",
    books:[{title:"GraphQL Basics"}],
  }];
    return <div>
      <p>Authors</p>
      {authors.map(author=>(<div className="authorCard">
        <p><strong>{author.name}</strong>,{author.age}
        ,from {author.birthPlace}</p>
        {author.books.map(book=>(
          <div class="bookCard"><p>{book.title}</p></div>
        ))}
      </div>))}

      <div className="authorInput">
        <div><span>Full name</span><span><input type="text"s value=""></input></span></div>
        <div><span>Age</span><span><input type="text" value=""></input></span></div>
        <div><span>birthPlace</span><span><input type="text"s value=""></input></span></div>
        <div><span></span><span><button className="primary">Add Author</button></span></div>
      </div>

    </div>
  }
}

export default authors;
