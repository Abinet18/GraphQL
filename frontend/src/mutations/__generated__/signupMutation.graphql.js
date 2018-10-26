/**
 * @flow
 * @relayHash 979fd488078f9dad5187c4bf0ebee0c9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateUserType = {
  username: string,
  email: string,
  password: string,
  fullname: string,
};
export type signupMutationVariables = {|
  user: CreateUserType
|};
export type signupMutationResponse = {|
  +addUser: ?{|
    +id: string,
    +username: string,
  |}
|};
export type signupMutation = {|
  variables: signupMutationVariables,
  response: signupMutationResponse,
|};
*/


/*
mutation signupMutation(
  $user: CreateUserType!
) {
  addUser(user: $user) {
    id
    username
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "user",
    "type": "CreateUserType!",
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
        "name": "user",
        "variableName": "user",
        "type": "CreateUserType"
      }
    ],
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
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "signupMutation",
  "id": null,
  "text": "mutation signupMutation(\n  $user: CreateUserType!\n) {\n  addUser(user: $user) {\n    id\n    username\n  }\n}\n",
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
(node/*: any*/).hash = 'd08a49736a83f1384b34735a3ac7197c';
module.exports = node;
