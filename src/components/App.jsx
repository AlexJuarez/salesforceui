// @flow

import React from 'react';
import { connect, Provider } from 'react-redux';
import Blog from './blog';

type Props = {
  store: *,
};

function App(props: Props): React.Element<*> {
  const { store, posts } = props;

  return (
    <Provider store={store} key="provider">
      <Blog posts={posts.valueSeq().toArray()} />
    </Provider>
  );
}

function mapStateToProps(state: Object): * {
  return {
    posts: state.posts,
  };
}

export default connect(mapStateToProps)(App);
