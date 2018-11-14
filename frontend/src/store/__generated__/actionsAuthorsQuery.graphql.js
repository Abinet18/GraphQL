/**
 * @flow
 * @relayHash 9ec8237da81c48127c7ff990352a6a4e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type actionsAuthorsQueryVariables = {||};
export type actionsAuthorsQueryResponse = {|
  +authorviewer: {|
    +allAuthors: {|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +id: string,
          +name: string,
          +age: number,
          +birthPlace: string,
          +books: ?$ReadOnlyArray<?{|
            +title: string
          |}>,
        |}
      |}>
    |}
  |}
|};
export type actionsAuthorsQuery = {|
  variables: actionsAuthorsQueryVariables,
  response: actionsAuthorsQueryResponse,
|};
*/


/*
query actionsAuthorsQuery {
  authorviewer {
    allAuthors(last: 100) {
      edges {
        node {
          id
          name
          age
          birthPlace
          books {
            title
            id
          }
          __typename
        }
        cursor
      }
      pageInfo {
        hasPreviousPage
        startCursor
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
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "age",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "birthPlace",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "pageInfo",
  "storageKey": null,
  "args": null,
  "concreteType": "PageInfo",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "hasPreviousPage",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "startCursor",
      "args": null,
      "storageKey": null
    }
  ]
},
v8 = [
  {
    "kind": "Literal",
    "name": "last",
    "value": 100,
    "type": "Int"
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "actionsAuthorsQuery",
  "id": null,
  "text": "query actionsAuthorsQuery {\n  authorviewer {\n    allAuthors(last: 100) {\n      edges {\n        node {\n          id\n          name\n          age\n          birthPlace\n          books {\n            title\n            id\n          }\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        hasPreviousPage\n        startCursor\n      }\n    }\n    id\n  }\n}\n",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "backward",
        "path": [
          "authorviewer",
          "allAuthors"
        ]
      }
    ]
  },
  "fragment": {
    "kind": "Fragment",
    "name": "actionsAuthorsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "authorviewer",
        "storageKey": null,
        "args": null,
        "concreteType": "AuthorViewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": "allAuthors",
            "name": "__AuthorList_allAuthors_connection",
            "storageKey": null,
            "args": null,
            "concreteType": "AuthorTypeConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "AuthorTypeEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "AuthorType",
                    "plural": false,
                    "selections": [
                      v0,
                      v1,
                      v2,
                      v3,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "books",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "BookType",
                        "plural": true,
                        "selections": [
                          v4
                        ]
                      },
                      v5
                    ]
                  },
                  v6
                ]
              },
              v7
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "actionsAuthorsQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "authorviewer",
        "storageKey": null,
        "args": null,
        "concreteType": "AuthorViewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "allAuthors",
            "storageKey": "allAuthors(last:100)",
            "args": v8,
            "concreteType": "AuthorTypeConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "AuthorTypeEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "AuthorType",
                    "plural": false,
                    "selections": [
                      v0,
                      v1,
                      v2,
                      v3,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "books",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "BookType",
                        "plural": true,
                        "selections": [
                          v4,
                          v0
                        ]
                      },
                      v5
                    ]
                  },
                  v6
                ]
              },
              v7
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "allAuthors",
            "args": v8,
            "handle": "connection",
            "key": "AuthorList_allAuthors",
            "filters": []
          },
          v0
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd913f7c0e5d22e9ad9819cc5d8a59841';
module.exports = node;
