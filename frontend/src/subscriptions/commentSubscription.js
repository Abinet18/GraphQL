import environment from '../Environment';
const {
  requestSubscription,
  graphql,
} = require('react-relay');
const {ConnectionHandler} = require('relay-runtime');


const subscription = graphql`
  subscription commentSubscription_Subscription($input:String) {
    addComment(bookid:$input) {
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



export default (bookid)=> {
  requestSubscription(
  environment,
  {
    subscription:subscription,
    variables:{input:bookid},
    updater: proxyStore => {
      // Get the notification
      const book = proxyStore.getRootField('addComment');
      const viewerId='viewer-fixed';
      const viewerProxy = proxyStore.get(viewerId);
      const connection=ConnectionHandler.getConnection(viewerProxy,"BookList_allBooks");
      if(connection){
        ConnectionHandler.deleteNode(connection,book.id);
      }
    },
  },
)
}
