import {commitMutation, graphql} from 'react-relay';
import { ConnectionHandler } from "relay-runtime";
import environment from '../Environment';

let tempID=0;
const mutation = graphql`
  mutation AddBookMutation(
    $input: AddBookInput!
  ) {
    addBook(input:$input) {
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

export default (title,authorid,description)=> {
  const variables = {
    input:{book: {
      title,
      description,
      authorid,
    }},
    clientMutationId:""
  };

  const optimisticResponse = {
      addBook: {
        book: {
          id: null,
          title: title,
          description: description,
          author:{
            name:""
          },
          comments:[]
        },
    }
  };

  const updater =  (proxyStore) => {

    const addBookField= proxyStore.getRootField('addBook');
    console.log(addBookField);
    const newBook= addBookField.getLinkedRecord('book');
    if(!newBook) return;
    const viewerId='viewer-fixed'
    const viewerProxy = proxyStore.get(viewerId);
    const connection=ConnectionHandler.getConnection(viewerProxy,"BookList_allBooks");
    if(connection){
      console.log("inserting");
      const newEdge=ConnectionHandler.createEdge(proxyStore,connection,newBook,'BookEdge');
      ConnectionHandler.insertEdgeAfter(connection,newEdge);
    }
  };

  commitMutation(
    environment,
    {
      mutation,
      variables,
      optimisticUpdater: updater,
      updater: updater,
      onCompleted: (response, errors) => {
        console.log("completed");
        console.log(response);
      },
      onError: err => console.error(err),
      optimisticResponse
    },
  );
}
