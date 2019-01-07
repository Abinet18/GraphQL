import {commitMutation, graphql} from 'react-relay';
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

export default (book)=> {

  const variables = {
    input:{id: book.id}  ,
    clientMutationId:""
  };

  const optimisticResponse = {
      deleteBook: {
        id: book.id
    }
  };

  const updater =  (proxyStore) => {

    const deleteBookField= proxyStore.getRootField('deleteBook');
    const id= deleteBookField.getValue('id');
    console.log(id);
    if(!id) return;
    const viewerId='viewer-fixed'
    const viewerProxy=proxyStore.get(viewerId);

    const connection=ConnectionHandler.getConnection(viewerProxy,"BookList_allBooks");
    if(connection){
       console.log("deleting");
       ConnectionHandler.deleteNode(connection,id);
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
