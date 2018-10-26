import {commitMutation, graphql} from 'react-relay';
import environment from '../Environment';
const mutation = graphql`
  mutation LoginMutation(
    $username: String!,$password:String!
  ) {
    loginUser(username: $username,password:$password) {
      id,
      username
      }
    }
`;

export default (username,password)=> {
  const variables = {

      username,
      password,
    clientMutationId:""
  };

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (response, errors) => {
        console.log(response);
        localStorage.setItem("authToken",response.loginUser.id);
      },
      onError: err => console.error(err),
    },
  );
}
