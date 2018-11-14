import {commitMutation, graphql} from 'react-relay';
import { ConnectionHandler } from "relay-runtime";
import environment from '../Environment';
const mutation = graphql`
  mutation AddCommentMutation(
    $input: AddCommentInput!
  ) {
    addComment(input:$input) {
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

export default (book,userid,comment,onAddComment)=> {


  const variables = {
    input:{comment: {
      bookid:book.id,
      userid:userid,
      comment:comment,
    }},
    clientMutationId:""
  };



  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (response, errors) => {
        console.log(response);
        onAddComment(response.addComment.book);
      },
      onError: err => console.error(err),
    },
  );
}
