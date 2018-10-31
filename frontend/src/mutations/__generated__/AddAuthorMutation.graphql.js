/**
 * @flow
 * @relayHash 43e1cf540fe5a6c4e4f7d974323a6b17
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddAuthorInput = {
  author?: ?CreateAuthorType,
  clientMutationId?: ?string,
};
export type CreateAuthorType = {
  name: string,
  age: number,
  birthPlace: string,
};
export type AddAuthorMutationVariables = {|
  input: AddAuthorInput
|};
export type AddAuthorMutationResponse = {|
  +addAuthor: ?{|
    +author: ?{|
      +id: string,
      +name: string,
      +birthPlace: string,
      +age: number,
      +books: ?$ReadOnlyArray<?{|
        +title: string
      |}>,
    |}
  |}
|};
export type AddAuthorMutation = {|
  variables: AddAuthorMutationVariables,
  response: AddAuthorMutationResponse,
|};
*/


/*
mutation AddAuthorMutation(
  $input: AddAuthorInput!
) {
  addAuthor(input: $input) {
    author {
      id
      name
      birthPlace
      age
      books {
        title
        id
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "AddAuthorInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "AddAuthorInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "birthPlace",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "age",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "AddAuthorMutation",
  "id": null,
  "text": "mutation AddAuthorMutation(\n  $input: AddAuthorInput!\n) {\n  addAuthor(input: $input) {\n    author {\n      id\n      name\n      birthPlace\n      age\n      books {\n        title\n        id\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AddAuthorMutation",
    "type": "Mutations",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addAuthor",
        "storageKey": null,
        "args": v1,
        "concreteType": "AddAuthorPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "author",
            "storageKey": null,
            "args": null,
            "concreteType": "AuthorType",
            "plural": false,
            "selections": [
              v2,
              v3,
              v4,
              v5,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "books",
                "storageKey": null,
                "args": null,
                "concreteType": "BookType",
                "plural": true,
                "selections": [
                  v6
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AddAuthorMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addAuthor",
        "storageKey": null,
        "args": v1,
        "concreteType": "AddAuthorPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "author",
            "storageKey": null,
            "args": null,
            "concreteType": "AuthorType",
            "plural": false,
            "selections": [
              v2,
              v3,
              v4,
              v5,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "books",
                "storageKey": null,
                "args": null,
                "concreteType": "BookType",
                "plural": true,
                "selections": [
                  v6,
                  v2
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3c57fa8779e45e553c5b4fc08385df2c';
module.exports = node;
