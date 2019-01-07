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

export default (book,userid,comment)=> {


  const variables = {
    input:{comment: {
      bookid:book.id,
      userid:userid,
      comment:comment,
    }},
    clientMutationId:""
  };

  const optimisticResponse = {
      addComment: {
        book: {
        ...book,
        comments:book.comments.concat({user:{id:userid,fullname:''},comment:comment,commentdate:new Date()})
        },
    }
  };

  const updater =  (proxyStore) => {

    const addCommentField= proxyStore.getRootField('addComment');
    const book= addCommentField.getLinkedRecord('book');
    if(!book) return;
    const viewerId='viewer-fixed'
    const viewerProxy=proxyStore.get(viewerId);

    const connection=ConnectionHandler.getConnection(viewerProxy,"BookList_allBooks");
    if(connection){

       ConnectionHandler.deleteNode(connection,book.id);

    }
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
      //updater:updater,
      //optimisticUpdater:updater,
      //optimisticResponse
    },
  );
}
