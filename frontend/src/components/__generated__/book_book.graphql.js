/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type book_book$ref: FragmentReference;
export type book_book = {|
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
  +$refType: book_book$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "book_book",
  "type": "BookType",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    v0,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "title",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "description",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "author",
      "storageKey": null,
      "args": null,
      "concreteType": "AuthorType",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "name",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
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
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '4b236b25804cf068058922ba03df4d11';
module.exports = node;
