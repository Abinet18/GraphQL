/**
 * @flow
 * @relayHash 03095ac3a1f85c3d5a3e752c1d90f28c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteBookInput = {
  id?: ?string,
  clientMutationId?: ?string,
};
export type DeleteBookMutationVariables = {|
  input: DeleteBookInput
|};
export type DeleteBookMutationResponse = {|
  +deleteBook: ?{|
    +id: ?string
  |}
|};
export type DeleteBookMutation = {|
  variables: DeleteBookMutationVariables,
  response: DeleteBookMutationResponse,
|};
*/


/*
mutation DeleteBookMutation(
  $input: DeleteBookInput!
) {
  deleteBook(input: $input) {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteBookInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteBook",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "DeleteBookInput!"
      }
    ],
    "concreteType": "DeleteBookPayload",
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
  "name": "DeleteBookMutation",
  "id": null,
  "text": "mutation DeleteBookMutation(\n  $input: DeleteBookInput!\n) {\n  deleteBook(input: $input) {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "DeleteBookMutation",
    "type": "Mutations",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteBookMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6fd33f9d17b2d985311a5b9695791447';
module.exports = node;
