/**
 * @flow
 * @relayHash 40c8c93e8aec9ea1ca3a8914d08f21f1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddBookInput = {
  book?: ?CreateBookType,
  clientMutationId?: ?string,
};
export type CreateBookType = {
  title: string,
  description: string,
  authorid: string,
};
export type AddBookMutationVariables = {|
  input: AddBookInput
|};
export type AddBookMutationResponse = {|
  +addBook: ?{|
    +book: ?{|
      +id: string,
      +title: string,
      +description: string,
      +author: ?{|
        +name: string
      |},
      +comments: ?$ReadOnlyArray<?{|
        +user: ?{|
          +id: string,
          +fullname: string,
        |},
        +comment: string,
        +commentdate: string,
      |}>,
    |}
  |}
|};
export type AddBookMutation = {|
  variables: AddBookMutationVariables,
  response: AddBookMutationResponse,
|};
*/


/*
mutation AddBookMutation(
  $input: AddBookInput!
) {
  addBook(input: $input) {
    book {
      id
      title
      description
      author {
        name
        id
      }
      comments {
        user {
          id
          fullname
        }
        comment
        commentdate
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
    "type": "AddBookInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "AddBookInput!"
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
  "name": "title",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "comments",
  "storageKey": null,
  "args": null,
  "concreteType": "CommentType",
  "plural": true,
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
        v2,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "fullname",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "comment",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "commentdate",
      "args": null,
      "storageKey": null
    }
  ]
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "AddBookMutation",
  "id": null,
  "text": "mutation AddBookMutation(\n  $input: AddBookInput!\n) {\n  addBook(input: $input) {\n    book {\n      id\n      title\n      description\n      author {\n        name\n        id\n      }\n      comments {\n        user {\n          id\n          fullname\n        }\n        comment\n        commentdate\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AddBookMutation",
    "type": "Mutations",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addBook",
        "storageKey": null,
        "args": v1,
        "concreteType": "AddBookPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "book",
            "storageKey": null,
            "args": null,
            "concreteType": "BookType",
            "plural": false,
            "selections": [
              v2,
              v3,
              v4,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "author",
                "storageKey": null,
                "args": null,
                "concreteType": "AuthorType",
                "plural": false,
                "selections": [
                  v5
                ]
              },
              v6
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AddBookMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addBook",
        "storageKey": null,
        "args": v1,
        "concreteType": "AddBookPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "book",
            "storageKey": null,
            "args": null,
            "concreteType": "BookType",
            "plural": false,
            "selections": [
              v2,
              v3,
              v4,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "author",
                "storageKey": null,
                "args": null,
                "concreteType": "AuthorType",
                "plural": false,
                "selections": [
                  v5,
                  v2
                ]
              },
              v6
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4efc926b73e12ec602df28326840f881';
module.exports = node;
