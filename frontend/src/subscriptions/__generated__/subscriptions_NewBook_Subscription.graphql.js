/**
 * @flow
 * @relayHash 6015b9c4c81d66d26dacdb725621ffea
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type subscriptions_NewBook_SubscriptionVariables = {||};
export type subscriptions_NewBook_SubscriptionResponse = {|
  +addBook: ?{|
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
export type subscriptions_NewBook_Subscription = {|
  variables: subscriptions_NewBook_SubscriptionVariables,
  response: subscriptions_NewBook_SubscriptionResponse,
|};
*/


/*
subscription subscriptions_NewBook_Subscription {
  addBook {
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
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
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
        v0,
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
  "name": "subscriptions_NewBook_Subscription",
  "id": null,
  "text": "subscription subscriptions_NewBook_Subscription {\n  addBook {\n    id\n    title\n    description\n    author {\n      name\n      id\n    }\n    comments {\n      user {\n        id\n        fullname\n      }\n      comment\n      commentdate\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "subscriptions_NewBook_Subscription",
    "type": "Subscriptions",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addBook",
        "storageKey": null,
        "args": null,
        "concreteType": "BookType",
        "plural": false,
        "selections": [
          v0,
          v1,
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "author",
            "storageKey": null,
            "args": null,
            "concreteType": "AuthorType",
            "plural": false,
            "selections": [
              v3
            ]
          },
          v4
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "subscriptions_NewBook_Subscription",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addBook",
        "storageKey": null,
        "args": null,
        "concreteType": "BookType",
        "plural": false,
        "selections": [
          v0,
          v1,
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "author",
            "storageKey": null,
            "args": null,
            "concreteType": "AuthorType",
            "plural": false,
            "selections": [
              v3,
              v0
            ]
          },
          v4
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e056a30ebf6c6872e12e6a34528abc1d';
module.exports = node;
