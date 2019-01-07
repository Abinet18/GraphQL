import environment from '../Environment';
const {
  requestSubscription,
  graphql,
} = require('react-relay');
const {ConnectionHandler} = require('relay-runtime');


const subscription = graphql`
  subscription subscriptions_NewBook_Subscription {
    addBook {
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
`;



export default ()=> {
  requestSubscription(
  environment,
  {
    subscription:subscription,
    variables:{},
    updater: proxyStore => {
      // Get the notification
      const newBook = proxyStore.getRootField('addBook');


    //  const addBookField= proxyStore.getRootField('addBook');
    //  console.log(addBookField);
    //  const newBook= addBookField.getLinkedRecord('book');
    //  if(!newBook) return;
      const viewerId='viewer-fixed'
      const viewerProxy = proxyStore.get(viewerId);
      const connection=ConnectionHandler.getConnection(viewerProxy,"BookList_allBooks");
      if(connection){
        console.log("inserting");
        const newEdge=ConnectionHandler.createEdge(proxyStore,connection,newBook,'BookEdge');
        ConnectionHandler.insertEdgeAfter(connection,newEdge);
      }

    },
  },
)
}
