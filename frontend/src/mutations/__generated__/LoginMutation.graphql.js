/**
 * @flow
 * @relayHash bb2d03fbaeb4492625add67994d17a92
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type LoginUserInput = {
  username?: ?string,
  password?: ?string,
  clientMutationId?: ?string,
};
export type LoginMutationVariables = {|
  input: LoginUserInput
|};
export type LoginMutationResponse = {|
  +loginUser: ?{|
    +user: ?{|
      +id: string,
      +username: string,
    |}
  |}
|};
export type LoginMutation = {|
  variables: LoginMutationVariables,
  response: LoginMutationResponse,
|};
*/


/*
mutation LoginMutation(
  $input: LoginUserInput!
) {
  loginUser(input: $input) {
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
    "type": "LoginUserInput!",
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
        "name": "input",
        "variableName": "input",
        "type": "LoginUserInput!"
      }
    ],
    "concreteType": "LoginUserPayload",
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
  "name": "LoginMutation",
  "id": null,
  "text": "mutation LoginMutation(\n  $input: LoginUserInput!\n) {\n  loginUser(input: $input) {\n    user {\n      id\n      username\n    }\n  }\n}\n",
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
(node/*: any*/).hash = 'f89592c868ffef89880aeb81b80e8044';
module.exports = node;
