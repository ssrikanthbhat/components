import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
            author="Sam"
            timeAgo="Today at 6:00 PM"
            text="Nice blog post!"
            image={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail
        author="Alex"
        timeAgo="Yesterday at 1:00 PM"
        text="Awesome post!"
        image={faker.image.avatar()}
      />
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail
        author="Jane"
        timeAgo="Yesterday at 12:00 PM"
        text="I like the subject!"
        image={faker.image.avatar()}
      />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
