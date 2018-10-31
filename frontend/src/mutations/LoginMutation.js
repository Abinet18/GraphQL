import {commitMutation, graphql} from 'react-relay';
import environment from '../Environment';
const mutation = graphql`
  mutation LoginMutation(
    $input:LoginUserInput!
  ) {
    loginUser(input:$input) {
      user{
      id,
      username
      }
    }
    }
`;

export default (username,password,history)=> {
  const variables = {
      input:{username,
      password},

    clientMutationId:""
  };

  commitMutation(
    environment,
    {
      mutation,
      variables,

      onCompleted: (response, errors) => {
        localStorage.setItem("authToken",response.loginUser.user.id);
        history.push('/books');
      },
      onError: err => console.error(err),
    },
  );
}
