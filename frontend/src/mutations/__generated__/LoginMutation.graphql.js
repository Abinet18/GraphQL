/**
 * @flow
 * @relayHash 2132bec9cf9940a0b3e602a7868d8391
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type LoginMutationVariables = {|
  username: string,
  password: string,
|};
export type LoginMutationResponse = {|
  +loginUser: ?{|
    +id: string,
    +username: string,
  |}
|};
export type LoginMutation = {|
  variables: LoginMutationVariables,
  response: LoginMutationResponse,
|};
*/


/*
mutation LoginMutation(
  $username: String!
  $password: String!
) {
  loginUser(username: $username, password: $password) {
    id
    username
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "username",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "password",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "loginUser",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "password",
        "variableName": "password",
        "type": "String"
      },
      {
        "kind": "Variable",
        "name": "username",
        "variableName": "username",
        "type": "String"
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
  "name": "LoginMutation",
  "id": null,
  "text": "mutation LoginMutation(\n  $username: String!\n  $password: String!\n) {\n  loginUser(username: $username, password: $password) {\n    id\n    username\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "LoginMutation",
    "type": "Mutations",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "LoginMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd884111778ac8e3604a86480593ac0d4';
module.exports = node;
