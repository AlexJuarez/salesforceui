// @flow

import request from 'browser-request';

export const GET_POSTS = 'GET_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPDATE_POST = 'UPDATE_POST';

export type Action<Payload> = {
  type: string,
  payload?: Payload,
  error?: boolean,
};

function createAction<Payload>(
  type: string,
  payload?: Payload,
  error?: boolean,
): Action<Payload> {
  return {
    type,
    payload,
    error,
  };
}

const ENDPOINT = 'http://restedblog.herokuapp.com/alexjuarez/api/';

export const getPosts = () => (dispatch) => {
  const url = ENDPOINT;
  const handler = (err, res, body) => {
    dispatch(createAction(GET_POSTS, body));
  };

  request.get({ url, json: true }, handler);
};

export const createPost = (title = '', text = '') => (dispatch) => {
  const url = ENDPOINT;
  const formData = { title, text };

  const handler = (err, res, body) => {
    dispatch(createAction(CREATE_POST, body));
  };

  request.post({ url, formData, json: true }, handler);
};

export const deletePost = id => (dispatch) => {
  const url = ENDPOINT + id;

  const handler = (err, res, body) => {
    dispatch(createAction(DELETE_POST, { id }));
  };

  request({ method: 'DELETE', url }, handler);
};

export const updatePost = (id, title, text) => (dispatch) => {
  const url = ENDPOINT + id;
  const formData = { title, text };

  const handler = (err, res, body) => {
    dispatch(createAction(UPDATE_POST, body));
  };

  request.post({ url, formData, json: true }, handler);
};