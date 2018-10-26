/**
 * @flow
 * @relayHash 98cc1e2e42875c0061ea82f358126129
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type author_author$ref = any;
export type authorsQueryVariables = {||};
export type authorsQueryResponse = {|
  +authors: ?$ReadOnlyArray<?{|
    +$fragmentRefs: author_author$ref
  |}>
|};
export type authorsQuery = {|
  variables: authorsQueryVariables,
  response: authorsQueryResponse,
|};
*/


/*
query authorsQuery {
  authors {
    ...author_author
  }
}

fragment author_author on AuthorType {
  id
  name
  age
  birthPlace
  books {
    title
  }
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "authorsQuery",
  "id": null,
  "text": "query authorsQuery {\n  authors {\n    ...author_author\n  }\n}\n\nfragment author_author on AuthorType {\n  id\n  name\n  age\n  birthPlace\n  books {\n    title\n  }\n}\n",
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
        "name": "authors",
        "storageKey": null,
        "args": null,
        "concreteType": "AuthorType",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "author_author",
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
        "name": "authors",
        "storageKey": null,
        "args": null,
        "concreteType": "AuthorType",
        "plural": true,
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
              }
            ]
          }
        ]
      }
    ]
  }
};
// prettier-ignore
(node/*: any*/).hash = '413f3a66420dd3e508cb61a9f6c8a120';
module.exports = node;
