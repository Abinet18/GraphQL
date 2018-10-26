import {commitMutation, graphql} from 'react-relay';
import environment from '../Environment';
const mutation = graphql`
  mutation AddAuthorMutation(
    $author: CreateAuthorType!
  ) {
    addAuthor(author: $author) {
      id,
      name
      }
    }
`;

export default (name,age,birthPlace)=> {
  const variables = {
    author: {
      name,
      age,
      birthPlace,
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
