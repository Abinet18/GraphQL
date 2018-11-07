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

export default (book)=> {

  const variables = {
    input:{book:{id:book.id,title:book.title,description:book.description,authorid:book.authorid}}  ,
    clientMutationId:""
  };

  console.log(variables);
  const optimisticResponse = {
      updateBook: {
        book
    }
  };

  const updater =  (proxyStore) => {

    const updateBookField= proxyStore.getRootField('updateBook');
    const book= updateBookField.getLinkedRecord('book');
    if(!book) return;
    const viewerId='viewer-fixed'
    const viewerProxy=proxyStore.get(viewerId);

    const connection=ConnectionHandler.getConnection(viewerProxy,"BookList_allBooks");
    if(connection){
       console.log("deleting");
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
      updater:updater,
      optimisticUpdater:updater,
      optimisticResponse
    },
  );
}
