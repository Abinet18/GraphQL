import {commitMutation, graphql} from 'react-relay';
import environment from '../Environment';
const mutation = graphql`
  mutation signupMutation(
    $user: CreateUserType!
  ) {
    addUser(user: $user) {
      id,
      username
      }
    }
`;

export default (username,password,email,fullname)=> {
  const variables = {
    user: {
      username,
      password,
      email,
      fullname,
      },
    clientMutationId:""
  };

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (response, errors) => {
        console.log(response);
        localStorage.setItem("authToken",response.addUser.id);
      },
      onError: err => console.error(err),
    },
  );
}
