/**
 * @flow
 * @relayHash 391eece98f33338a592717ea743287d2
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteAuthorInput = {
  id?: ?string,
  clientMutationId?: ?string,
};
export type DeleteAuthorMutationVariables = {|
  input: DeleteAuthorInput
|};
export type DeleteAuthorMutationResponse = {|
  +deleteAuthor: ?{|
    +id: ?string
  |}
|};
export type DeleteAuthorMutation = {|
  variables: DeleteAuthorMutationVariables,
  response: DeleteAuthorMutationResponse,
|};
*/


/*
mutation DeleteAuthorMutation(
  $input: DeleteAuthorInput!
) {
  deleteAuthor(input: $input) {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteAuthorInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteAuthor",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "DeleteAuthorInput!"
      }
    ],
    "concreteType": "DeleteAuthorPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "DeleteAuthorMutation",
  "id": null,
  "text": "mutation DeleteAuthorMutation(\n  $input: DeleteAuthorInput!\n) {\n  deleteAuthor(input: $input) {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "DeleteAuthorMutation",
    "type": "Mutations",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteAuthorMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '25b2ac5376a50a0a1140fa3a0a81af8e';
module.exports = node;
