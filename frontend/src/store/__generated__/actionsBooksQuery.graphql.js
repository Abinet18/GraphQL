/**
 * @flow
 * @relayHash 7c073924b758bf361119fe763772df5d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type actionsBooksQueryVariables = {||};
export type actionsBooksQueryResponse = {|
  +viewer: {|
    +allBooks: {|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
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
      |}>
    |}
  |}
|};
export type actionsBooksQuery = {|
  variables: actionsBooksQueryVariables,
  response: actionsBooksQueryResponse,
|};
*/


/*
query actionsBooksQuery {
  viewer {
    allBooks {
      edges {
        node {
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
    id
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
  "operationKind": "query",
  "name": "actionsBooksQuery",
  "id": null,
  "text": "query actionsBooksQuery {\n  viewer {\n    allBooks {\n      edges {\n        node {\n          id\n          title\n          description\n          author {\n            name\n            id\n          }\n          comments {\n            user {\n              id\n              fullname\n            }\n            comment\n            commentdate\n          }\n        }\n      }\n    }\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "actionsBooksQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "allBooks",
            "storageKey": null,
            "args": null,
            "concreteType": "BookTypeConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "BookTypeEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
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
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "actionsBooksQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "allBooks",
            "storageKey": null,
            "args": null,
            "concreteType": "BookTypeConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "BookTypeEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
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
            ]
          },
          v0
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '44823ed4a72e641d9e3ed5e65b36a67c';
module.exports = node;
