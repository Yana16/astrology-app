import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Disqus, { DiscussionEmbed } from "disqus-react";
import { CommentCount } from "disqus-react";

class Comment extends Component {
  render() {
    const disqusShortname = "astrology-4";
    const disqusConfig = {
      url: "http://localhost:3000/",
      identifier: "article-id",
      title: "Client Commnts",
    };

    return (
      <Container className="pt-5 pb-5">
        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </Container>
    );
  }
}

export default Comment;
