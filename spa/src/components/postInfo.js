import React, { Component } from 'react';

class PostInfo extends Component {
  render() {
    return (
        <div>
            <div>
                <h3>{this.props.post.title}</h3>
                {this.props.post.description.length > 100 ? this.props.post.description.substring(0, 100).concat('...') : this.props.post.description}
            </div>
        </div>
    );
  }
}

export default PostInfo;
