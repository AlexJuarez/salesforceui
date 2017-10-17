// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Post from './../../records/Post';
import * as actions from '../../actions/index';
import PostHolder from './post';

import './styles.less';

type Props = {
  posts: Array<Post>,
  createPost: (title: string, text: string) => void,
  updatePost: (id: number, title: string, text: string) => void,
  deletePost: (id: number) => void
};

class Blog extends Component {
  props: Props;

  createPost = () => {
    this.props.createPost();
  };

  renderPosts() {
    const { updatePost, deletePost } = this.props;

    const posts = this.props.posts.map(post => (
      <PostHolder
        post={post}
        key={post.id}
        onUpdate={updatePost}
        onDelete={deletePost}
      />
    ));

    return (
      <div className="col-8">
        {posts}
      </div>
    );
  }

  renderPastPosts() {
    const posts = this.props.posts.map(post => (
      <div key={post.id}>{post.timestamp.format('DD MMM YYYY')} - {post.title}</div>
    ));

    return (
      <div className="col-4">
        <h2>Past Posts</h2>
        {posts}
        <br />
        <button className="btn" onClick={this.createPost}>(Create New Post)</button>
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>My Blog</h1>
          </div>
        </div>
        <div className="row">
          {this.renderPastPosts()}
          {this.renderPosts()}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createPost: (title, text) => dispatch(actions.createPost(title, text)),
  deletePost: id => dispatch(actions.deletePost(id)),
  updatePost: (id, title, text) => dispatch(actions.updatePost(id, title, text)),
});

export default connect(null, mapDispatchToProps)(Blog);
