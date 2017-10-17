import React, { Component } from 'react';

export default class Post extends Component {
  state = {
    ui: (this.props.post.title === '' || this.props.post.text === '') ? 'edit' : 'view',
    title: this.props.post.title,
    text: this.props.post.text,
  };

  editMode = () => {
    this.setState({ ui: 'edit' });
  };

  onDelete = () => {
    this.props.onDelete(this.props.post.id);
  };

  onUpdate = () => {
    const { title, text } = this.state;
    this.props.onUpdate(this.props.post.id, title, text);
    this.setState({ ui: 'view' });
  };

  onChangeTitle = (event) => {
    this.setState({ title: event.target.value });
  };

  onChangeText = (event) => {
    this.setState({ text: event.target.value });
  };

  renderEdit() {
    const { title, text } = this.state;
    const { timestamp } = this.props.post;
    return (
      <div className="post">
        <div className="post-header">
          <h2>
            <span className="post-date" style={{ float: 'right' }}>
              {timestamp.format('DD MMM YYYY')}
            </span>
            <input
              className="form-control"
              type="text"
              value={title}
              onChange={this.onChangeTitle}
            />
          </h2>
        </div>
        <div className="post-body">
          <textarea
            className="form-control"
            onChange={this.onChangeText}
            rows="6"
            value={text}
          />
          <br />
          <button
            className="btn"
            onClick={this.onUpdate}
          >
            Save
          </button>
        </div>
      </div>
    );
  }

  renderView() {
    const { title, timestamp, text } = this.props.post;
    return (
      <div className="post">
        <div className="post-header">
          <h2>
            <span className="post-date" style={{ float: 'right' }}>
              {timestamp.format('DD MMM YYYY')}
            </span>
            {title}
          </h2>
        </div>
        <div className="post-body">
          {text}
          <br />
          <div className="btn-group" style={{ textAlign: 'right' }}>
            <button
              className="btn"
              onClick={this.editMode}
            >
              (edit)
            </button>
            <button
              className="btn"
              onClick={this.onDelete}
            >
              (delete)
            </button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    switch(this.state.ui) {
      case 'edit':
        return this.renderEdit();
      default:
        return this.renderView();
    }
  }
}