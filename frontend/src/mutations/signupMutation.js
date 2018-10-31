import {commitMutation, graphql} from 'react-relay';
import environment from '../Environment';
const mutation = graphql`
  mutation signupMutation(
    $input:AddUserInput!
  ) {
    addUser(input:$input) {
      user{
      id,
      username
      }
    }
    }
`;

export default (username,password,email,fullname,history)=> {
  const variables = {
      input:{ user:{username,
              password,
              email,
              fullname}
            },
    clientMutationId:""
  };

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (response, errors) => {
        if(response.addUser!=null)
        {
          //localStorage.setItem("authToken",response.addUser.id);
          history.push("/login");
        }
      },
      onError: err => console.error(err),
    },
  );
}
