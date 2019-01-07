import {commitMutation, graphql} from 'react-relay';
import { ConnectionHandler } from "relay-runtime";
import environment from '../Environment';
const mutation = graphql`
  mutation DeleteAuthorMutation(
    $input: DeleteAuthorInput!
  ) {
    deleteAuthor(input:$input)
    {
      id
    }
  }

  `;

export default (author)=> {

  const variables = {
    input:{id: author.id}  ,
    clientMutationId:""
  };

  const optimisticResponse = {
      deleteAuthor: {
        id: author.id
    }
  };

  const updater =  (proxyStore) => {

    const deleteAuthorField= proxyStore.getRootField('deleteAuthor');
    const id= deleteAuthorField.getValue('id');
    console.log(id);
    if(!id) return;
    const viewerId='author-viewer-fixed'
    const viewerProxy=proxyStore.get(viewerId);

    const connection=ConnectionHandler.getConnection(viewerProxy,"AuthorList_allAuthors");
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
