/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type author_author$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type AuthorList_viewer$ref: FragmentReference;
export type AuthorList_viewer = {|
  +allAuthors: {|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +$fragmentRefs: author_author$ref
      |}
    |}>
  |},
  +$refType: AuthorList_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "AuthorList_viewer",
  "type": "AuthorViewer",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "backward",
        "path": [
          "allAuthors"
        ]
      }
    ]
  },
  "argumentDefinitions": [],
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
                {
                  "kind": "FragmentSpread",
                  "name": "author_author",
                  "args": null
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
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '848500f34b33d9afbf3b54b51452cd8e';
module.exports = node;
