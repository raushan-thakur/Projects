import React from "react";
import Comment from "./Comment";
import { Comments } from "./Comments";

const NestedComments = () => {
  return (
    <div>
      {Comments.map((comment, i) => (
        <Comment key={i} data={comment} />
      ))}
    </div>
  );
};

export default NestedComments;
