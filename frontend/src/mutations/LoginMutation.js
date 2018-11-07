import {commitMutation, graphql} from 'react-relay';
import environment from '../Environment';
const mutation = graphql`
  mutation LoginMutation(
    $input:LoginUserInput!
  ) {
    loginUser(input:$input) {
      token
    }
    }
`;

export default (username,password,history,callback)=> {
  const variables = {
      input:{
        username,
        password
      },

    clientMutationId:""
  };

  commitMutation(
    environment,
    {
      mutation,
      variables,

      onCompleted: (response, errors) => {
        if(response.loginUser && response.loginUser.token)
        {

        localStorage.setItem("authToken",response.loginUser.token);
        callback();
        history.push('/books');
      }
      },
      onError: err => console.error(err),
    },
  );
}
