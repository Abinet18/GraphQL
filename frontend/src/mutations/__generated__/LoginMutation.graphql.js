/**
 * @flow
 * @relayHash a3d3ce4bf4f2ad56928e9a010a0305c3
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
    +token: ?string
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
    token
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
        "kind": "ScalarField",
        "alias": null,
        "name": "token",
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
  "text": "mutation LoginMutation(\n  $input: LoginUserInput!\n) {\n  loginUser(input: $input) {\n    token\n  }\n}\n",
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
(node/*: any*/).hash = '51f3914618bb0f85d18f4894329ee480';
module.exports = node;
