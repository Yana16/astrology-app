import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Disqus from "disqus-react";

class Comment extends Component {
  render() {
    const disqusShortname = "astrology-4";
    const disqusConfig = {
      url: "http://localhost:3000/",
      identifier: "article-id",
      title: "Client Commnts",
    };

    return (
      <Container className="pt-5 pb-5" id="blog">
        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </Container>
    );
  }
}

export default Comment;
