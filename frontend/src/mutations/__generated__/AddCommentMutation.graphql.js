/**
 * @flow
 * @relayHash 514bd54a68d3d34d5a5c8f41d6dd409e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateCommentType = {
  bookid: string,
  userid: string,
  comment: string,
};
export type AddCommentMutationVariables = {|
  comment: CreateCommentType
|};
export type AddCommentMutationResponse = {|
  +addComment: ?{|
    +id: string,
    +title: string,
  |}
|};
export type AddCommentMutation = {|
  variables: AddCommentMutationVariables,
  response: AddCommentMutationResponse,
|};
*/


/*
mutation AddCommentMutation(
  $comment: CreateCommentType!
) {
  addComment(comment: $comment) {
    id
    title
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "comment",
    "type": "CreateCommentType!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "addComment",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "comment",
        "variableName": "comment",
        "type": "CreateCommentType"
      }
    ],
    "concreteType": "BookType",
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
        "name": "title",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "AddCommentMutation",
  "id": null,
  "text": "mutation AddCommentMutation(\n  $comment: CreateCommentType!\n) {\n  addComment(comment: $comment) {\n    id\n    title\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AddCommentMutation",
    "type": "Mutations",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "AddCommentMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '84b1331925e2bb95d0429b658fb9b595';
module.exports = node;
