/**
 * @flow
 * @relayHash 5556303145c42bb97c85ef124c9d74fd
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type AuthorList_viewer$ref = any;
export type authorsQueryVariables = {||};
export type authorsQueryResponse = {|
  +authorviewer: {|
    +$fragmentRefs: AuthorList_viewer$ref
  |}
|};
export type authorsQuery = {|
  variables: authorsQueryVariables,
  response: authorsQueryResponse,
|};
*/


/*
query authorsQuery {
  authorviewer {
    ...AuthorList_viewer
    id
  }
}

fragment AuthorList_viewer on AuthorViewer {
  allAuthors(last: 100) {
    edges {
      node {
        ...author_author
        id
        __typename
      }
      cursor
    }
    pageInfo {
      hasPreviousPage
      startCursor
    }
  }
}

fragment author_author on AuthorType {
  id
  name
  age
  birthPlace
  books {
    title
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "last",
    "value": 100,
    "type": "Int"
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "authorsQuery",
  "id": null,
  "text": "query authorsQuery {\n  authorviewer {\n    ...AuthorList_viewer\n    id\n  }\n}\n\nfragment AuthorList_viewer on AuthorViewer {\n  allAuthors(last: 100) {\n    edges {\n      node {\n        ...author_author\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n\nfragment author_author on AuthorType {\n  id\n  name\n  age\n  birthPlace\n  books {\n    title\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "authorsQuery",
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
            "kind": "FragmentSpread",
            "name": "AuthorList_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "authorsQuery",
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
            "args": v0,
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
                      v1,
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "name",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "age",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "birthPlace",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "books",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "BookType",
                        "plural": true,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "title",
                            "args": null,
                            "storageKey": null
                          },
                          v1
                        ]
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "__typename",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "cursor",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
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
              }
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "allAuthors",
            "args": v0,
            "handle": "connection",
            "key": "AuthorList_allAuthors",
            "filters": []
          },
          v1
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '423d4de84551926f2aee214ad5af502f';
module.exports = node;
