/**
 * @flow
 * @relayHash e41bff3e72c34044f8097173c900a22d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddUserInput = {
  user?: ?CreateUserType,
  clientMutationId?: ?string,
};
export type CreateUserType = {
  username: string,
  email: string,
  password: string,
  fullname: string,
};
export type signupMutationVariables = {|
  input: AddUserInput
|};
export type signupMutationResponse = {|
  +addUser: ?{|
    +user: ?{|
      +id: string,
      +username: string,
    |}
  |}
|};
export type signupMutation = {|
  variables: signupMutationVariables,
  response: signupMutationResponse,
|};
*/


/*
mutation signupMutation(
  $input: AddUserInput!
) {
  addUser(input: $input) {
    user {
      id
      username
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "AddUserInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "addUser",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "AddUserInput!"
      }
    ],
    "concreteType": "AddUserPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": null,
        "concreteType": "UserType",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "username",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "signupMutation",
  "id": null,
  "text": "mutation signupMutation(\n  $input: AddUserInput!\n) {\n  addUser(input: $input) {\n    user {\n      id\n      username\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "signupMutation",
    "type": "Mutations",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "signupMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a7792cb209dfd3d10b9b3f8fc55547c9';
module.exports = node;
