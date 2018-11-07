/**
 * @flow
 * @relayHash 7e932c0d37a690518cfdfce835f44eff
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateBookInput = {
  book?: ?UpdateBookType,
  clientMutationId?: ?string,
};
export type UpdateBookType = {
  id?: ?string,
  title?: ?string,
  description?: ?string,
  authorid?: ?string,
};
export type UpdateBookMutationVariables = {|
  input: UpdateBookInput
|};
export type UpdateBookMutationResponse = {|
  +updateBook: ?{|
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
export type UpdateBookMutation = {|
  variables: UpdateBookMutationVariables,
  response: UpdateBookMutationResponse,
|};
*/


/*
mutation UpdateBookMutation(
  $input: UpdateBookInput!
) {
  updateBook(input: $input) {
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
    "type": "UpdateBookInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "UpdateBookInput!"
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
  "name": "UpdateBookMutation",
  "id": null,
  "text": "mutation UpdateBookMutation(\n  $input: UpdateBookInput!\n) {\n  updateBook(input: $input) {\n    book {\n      id\n      title\n      description\n      author {\n        name\n        id\n      }\n      comments {\n        user {\n          id\n          fullname\n        }\n        comment\n        commentdate\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateBookMutation",
    "type": "Mutations",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateBook",
        "storageKey": null,
        "args": v1,
        "concreteType": "UpdateBookPayload",
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
    "name": "UpdateBookMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateBook",
        "storageKey": null,
        "args": v1,
        "concreteType": "UpdateBookPayload",
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
(node/*: any*/).hash = 'cda24ec49dec2f7c8c4d9e13a12410e9';
module.exports = node;
