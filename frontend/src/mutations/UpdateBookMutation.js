import {commitMutation, graphql,toGlobalId} from 'react-relay';
import { ConnectionHandler } from "relay-runtime";
import environment from '../Environment';
const mutation = graphql`
  mutation UpdateBookMutation(
    $input: UpdateBookInput!
  ) {
    updateBook(input:$input)
    {
      book{
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
    }
  }

  `;

export default (book,onUpdateBook)=> {

  const variables = {
    input:{book:{id:book.id,title:book.title,description:book.description,authorid:book.authorid}}  ,
    clientMutationId:""
  };



  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (response, errors) => {
        console.log(response);
        onUpdateBook(response.updateBook.book);
      },
      onError: err => console.error(err),

    },
  );
}
