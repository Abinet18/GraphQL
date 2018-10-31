/**
 * @flow
 * @relayHash 370fb139dfbce75484d114505f09a00f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type addbookAuthorsQueryVariables = {||};
export type addbookAuthorsQueryResponse = {|
  +authors: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +name: string,
      |}
    |}>
  |}
|};
export type addbookAuthorsQuery = {|
  variables: addbookAuthorsQueryVariables,
  response: addbookAuthorsQueryResponse,
|};
*/


/*
query addbookAuthorsQuery {
  authors {
    edges {
      node {
        id
        name
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "authors",
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
                "name": "name",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "addbookAuthorsQuery",
  "id": null,
  "text": "query addbookAuthorsQuery {\n  authors {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "addbookAuthorsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "addbookAuthorsQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '29ac76b542dbc638f2db16e03e8a20eb';
module.exports = node;
