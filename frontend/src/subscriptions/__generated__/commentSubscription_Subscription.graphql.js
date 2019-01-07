/**
 * @flow
 * @relayHash c473631f877ca2397fc65a6cd8675a3a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type commentSubscription_SubscriptionVariables = {|
  input?: ?string
|};
export type commentSubscription_SubscriptionResponse = {|
  +addComment: ?{|
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
|};
export type commentSubscription_Subscription = {|
  variables: commentSubscription_SubscriptionVariables,
  response: commentSubscription_SubscriptionResponse,
|};
*/


/*
subscription commentSubscription_Subscription(
  $input: String
) {
  addComment(bookid: $input) {
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "bookid",
    "variableName": "input",
    "type": "String"
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
  "operationKind": "subscription",
  "name": "commentSubscription_Subscription",
  "id": null,
  "text": "subscription commentSubscription_Subscription(\n  $input: String\n) {\n  addComment(bookid: $input) {\n    id\n    title\n    description\n    author {\n      name\n      id\n    }\n    comments {\n      user {\n        id\n        fullname\n      }\n      comment\n      commentdate\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "commentSubscription_Subscription",
    "type": "Subscriptions",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addComment",
        "storageKey": null,
        "args": v1,
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
  },
  "operation": {
    "kind": "Operation",
    "name": "commentSubscription_Subscription",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addComment",
        "storageKey": null,
        "args": v1,
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
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a8059541e2e487da0c1a6f908f506687';
module.exports = node;
