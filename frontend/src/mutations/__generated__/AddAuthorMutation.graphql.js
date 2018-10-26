/**
 * @flow
 * @relayHash 8d71b6b99262f2bc02267488b7f525c7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateAuthorType = {
  name: string,
  age: number,
  birthPlace: string,
};
export type AddAuthorMutationVariables = {|
  author: CreateAuthorType
|};
export type AddAuthorMutationResponse = {|
  +addAuthor: ?{|
    +id: string,
    +name: string,
  |}
|};
export type AddAuthorMutation = {|
  variables: AddAuthorMutationVariables,
  response: AddAuthorMutationResponse,
|};
*/


/*
mutation AddAuthorMutation(
  $author: CreateAuthorType!
) {
  addAuthor(author: $author) {
    id
    name
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "author",
    "type": "CreateAuthorType!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "addAuthor",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "author",
        "variableName": "author",
        "type": "CreateAuthorType"
      }
    ],
    "concreteType": "AuthorType",
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
        "name": "name",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "AddAuthorMutation",
  "id": null,
  "text": "mutation AddAuthorMutation(\n  $author: CreateAuthorType!\n) {\n  addAuthor(author: $author) {\n    id\n    name\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AddAuthorMutation",
    "type": "Mutations",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "AddAuthorMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'aac0c1ed6f3618428dc914556cff0d5e';
module.exports = node;
