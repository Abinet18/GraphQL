/**
 * @flow
 * @relayHash 824507f1c8b8fa0ea5141bf49dbce9d9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type book_book$ref = any;
export type booksQueryVariables = {||};
export type booksQueryResponse = {|
  +books: ?$ReadOnlyArray<?{|
    +$fragmentRefs: book_book$ref
  |}>
|};
export type booksQuery = {|
  variables: booksQueryVariables,
  response: booksQueryResponse,
|};
*/


/*
query booksQuery {
  books {
    ...book_book
  }
}

fragment book_book on BookType {
  id
  title
  description
  author {
    name
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "booksQuery",
  "id": null,
  "text": "query booksQuery {\n  books {\n    ...book_book\n  }\n}\n\nfragment book_book on BookType {\n  id\n  title\n  description\n  author {\n    name\n  }\n  comments {\n    user {\n      id\n      fullname\n    }\n    comment\n    commentdate\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "booksQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
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
            "kind": "FragmentSpread",
            "name": "book_book",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "booksQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "books",
        "storageKey": null,
        "args": null,
        "concreteType": "BookType",
        "plural": true,
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
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e982f65b68bf1c26892738d411f3c50d';
module.exports = node;
