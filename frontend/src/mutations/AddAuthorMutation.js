import {commitMutation, graphql} from 'react-relay';
import { ConnectionHandler } from "relay-runtime";
import environment from '../Environment';
const mutation = graphql`
  mutation AddAuthorMutation(
    $input: AddAuthorInput!
  ) {
    addAuthor(input:$input) {
      author{
      id
      name
      birthPlace
      age
      books
      {
        title
      }
      }
    }
    }
`;

export default (name,age,birthPlace)=> {
  const variables = {
    input:{author: {
      name,
      age,
      birthPlace,
    }},
    clientMutationId:""
  };

  const optimisticResponse = {
      addAuthor: {
        author: {
          id: null,
          name: name,
          age:age,
          birthPlace:birthPlace,
          books:[]
        },
    }
  };

  const updater =  (proxyStore) => {

    const addAuthorField= proxyStore.getRootField('addAuthor');
    console.log(addAuthorField);
    const newAuthor= addAuthorField.getLinkedRecord('author');
    if(!newAuthor) return;
    const viewerId='author-viewer-fixed';
    const viewerProxy = proxyStore.get(viewerId);
     const connection=ConnectionHandler.getConnection(viewerProxy,"AuthorList_allAuthors");
     if(connection){
       console.log("inserting");
       const newEdge=ConnectionHandler.createEdge(proxyStore,connection,newAuthor,'AuthorEdge');
       ConnectionHandler.insertEdgeAfter(connection,newEdge);
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
      optimisticUpdater:updater,
      updater:updater,
      optimisticResponse,
    },
  );
}
