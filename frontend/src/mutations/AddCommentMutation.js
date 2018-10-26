import {commitMutation, graphql} from 'react-relay';
import environment from '../Environment';
const mutation = graphql`
  mutation AddCommentMutation(
    $comment: CreateCommentType!
  ) {
    addComment(comment: $comment) {
      id,
      title
      }
    }
`;

export default (bookid,userid,comment)=> {
  const variables = {
    comment: {
      bookid,
      userid,
      comment,
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
