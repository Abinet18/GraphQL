import {commitMutation, graphql} from 'react-relay';
import environment from '../Environment';
const mutation = graphql`
  mutation AddBookMutation(
    $book: CreateBookType!
  ) {
    addBook(book: $book) {
      id,
      title
      }
    }
`;

export default (title,authorid,description)=> {
  const variables = {
    book: {
      title,
      description,
      authorid,
      },
    clientMutationId:""
  };

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (response, errors) => {
        console.log(response);
      },
      onError: err => console.error(err),
    },
  );
}
