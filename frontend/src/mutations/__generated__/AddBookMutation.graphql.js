/**
 * @flow
 * @relayHash 35f4eada27cc3cda6d3d8cad7895ed85
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateBookType = {
  title: string,
  description: string,
  authorid: string,
};
export type AddBookMutationVariables = {|
  book: CreateBookType
|};
export type AddBookMutationResponse = {|
  +addBook: ?{|
    +id: string,
    +title: string,
  |}
|};
export type AddBookMutation = {|
  variables: AddBookMutationVariables,
  response: AddBookMutationResponse,
|};
*/


/*
mutation AddBookMutation(
  $book: CreateBookType!
) {
  addBook(book: $book) {
    id
    title
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "book",
    "type": "CreateBookType!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "addBook",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "book",
        "variableName": "book",
        "type": "CreateBookType"
      }
    ],
    "concreteType": "BookType",
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
        "name": "title",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "AddBookMutation",
  "id": null,
  "text": "mutation AddBookMutation(\n  $book: CreateBookType!\n) {\n  addBook(book: $book) {\n    id\n    title\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AddBookMutation",
    "type": "Mutations",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "AddBookMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '575752e6d350924b3ca61ff515d133c8';
module.exports = node;
