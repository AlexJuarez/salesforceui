// @flow

import { Map } from 'immutable';

import Post from '../records/Post';
import * as actions from '../actions';

import type { Action } from '../actions';

export default function (
  state: Posts = Map(),
  action: Action<Object>,
): Array<Post> {
  switch (action.type) {
    case actions.GET_POSTS:
      const tempMap = {};
      action.payload.forEach(p => {
        tempMap[p.id] = new Post(p);
      });

      return Map(tempMap);
    case actions.UPDATE_POST: {
      const { id, title, text } = action.payload;
      const post = state.get(id).set('title', title).set('text', text);
      return state.set(id, post);
    }
    case actions.DELETE_POST: {
      const { id } = action.payload;
      return state.delete(id);
    }
    case action.CREATE_POST: {
      const { id } = action.payload;
      return state.set(id, new Post(action.payload));
    }
    default:
      return state;
  }
};
