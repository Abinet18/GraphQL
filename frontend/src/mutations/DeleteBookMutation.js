import {commitMutation, graphql,toGlobalId} from 'react-relay';
import { ConnectionHandler } from "relay-runtime";
import environment from '../Environment';
const mutation = graphql`
  mutation DeleteBookMutation(
    $input: DeleteBookInput!
  ) {
    deleteBook(input:$input)
    {
      id
    }
  }

  `;

export default (book,onDeleteBook)=> {

  const variables = {
    input:{id: book.id}  ,
    clientMutationId:""
  };



  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (response, errors) => {

        console.log(response);
        onDeleteBook(response.deleteBook.id);
      },
      onError: err => console.error(err),

    },
  );
}
