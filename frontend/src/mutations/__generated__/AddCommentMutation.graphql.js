/**
 * @flow
 * @relayHash aa5b93bff886c39fd6905033414affa0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddCommentInput = {
  comment?: ?CreateCommentType,
  clientMutationId?: ?string,
};
export type CreateCommentType = {
  bookid: string,
  userid: string,
  comment: string,
};
export type AddCommentMutationVariables = {|
  input: AddCommentInput
|};
export type AddCommentMutationResponse = {|
  +addComment: ?{|
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
export type AddCommentMutation = {|
  variables: AddCommentMutationVariables,
  response: AddCommentMutationResponse,
|};
*/


/*
mutation AddCommentMutation(
  $input: AddCommentInput!
) {
  addComment(input: $input) {
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
    "type": "AddCommentInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "AddCommentInput!"
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
  "name": "AddCommentMutation",
  "id": null,
  "text": "mutation AddCommentMutation(\n  $input: AddCommentInput!\n) {\n  addComment(input: $input) {\n    book {\n      id\n      title\n      description\n      author {\n        name\n        id\n      }\n      comments {\n        user {\n          id\n          fullname\n        }\n        comment\n        commentdate\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AddCommentMutation",
    "type": "Mutations",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addComment",
        "storageKey": null,
        "args": v1,
        "concreteType": "AddCommentPayload",
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
    "name": "AddCommentMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addComment",
        "storageKey": null,
        "args": v1,
        "concreteType": "AddCommentPayload",
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
(node/*: any*/).hash = 'edaa156a75b5938e0199c974ddd48584';
module.exports = node;
