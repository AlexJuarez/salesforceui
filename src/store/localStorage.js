// @flow

import type { State } from '../reducers/index';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState != null) {
      const parsed = JSON.parse(serializedState);

      return {};
    }
  } catch (err) {
    // disregard err
  }

  return undefined;
};

export const saveState = (state: State) => {
  try {
    const serializedState = JSON.stringify({});
    localStorage.setItem('state', serializedState);
  } catch (err) {
    // disregard err
  }
};
