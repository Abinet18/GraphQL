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

export default (title,authorid,description,onAddBook)=> {
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
    this.props.onAddBook(newBook);
  };

  commitMutation(
    environment,
    {
      mutation,
      variables,
      //optimisticUpdater: updater,
      //updater: updater,
      onCompleted: (response, errors) => {
        console.log(response.addBook.book);
        console.log(errors);
        onAddBook(response.addBook.book);
      },
      onError: err => console.error(err),
      optimisticResponse
    },
  );
}
