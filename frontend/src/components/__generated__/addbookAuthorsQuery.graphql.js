/**
 * @flow
 * @relayHash 85f85291c888d3ca93d46582e7fd52a9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type addbookAuthorsQueryVariables = {||};
export type addbookAuthorsQueryResponse = {|
  +authors: ?$ReadOnlyArray<?{|
    +id: string,
    +name: string,
  |}>
|};
export type addbookAuthorsQuery = {|
  variables: addbookAuthorsQueryVariables,
  response: addbookAuthorsQueryResponse,
|};
*/


/*
query addbookAuthorsQuery {
  authors {
    id
    name
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
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "addbookAuthorsQuery",
  "id": null,
  "text": "query addbookAuthorsQuery {\n  authors {\n    id\n    name\n  }\n}\n",
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
(node/*: any*/).hash = '63da70eee23c80c2009e39ca71e92cbc';
module.exports = node;
