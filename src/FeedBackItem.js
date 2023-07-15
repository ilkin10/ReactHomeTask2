import React, { Component } from "react";

export default class FeedBackItem extends Component {
  render() {
    return (
        <div className="comment">
      <div className="comment-header">
        <div className="avatar"></div>
        <div className="comment-details">
          <div className="comment-author">{this.props.feedback.user} ({this.props.feedback.moviename})</div>
          <div className="comment-timestamp" style={{marginTop:"-6px"}}>{this.props.feedback.time}</div>
        </div>
      </div>
      <div className="comment-content">{this.props.feedback.content}</div>
    </div>
    );
  }
}
