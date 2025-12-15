import React, { useState } from "react";

const Comment = ({ data }) => {
  const [showReplies, setShowReplies] = useState(true);

  const hasReplies = data?.replies && data.replies.length > 0;

  return (
    <div className="m-2 border-l-4 border-red-500 pl-3">
      <div className="flex items-center gap-2">
        <img
          className="w-12 h-12 rounded-full"
          src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png"
          alt="user"
        />
        <div className="font-semibold">{data.name}</div>
      </div>

      <div className="ml-14">{data.description}</div>

      {hasReplies && (
        <button
          onClick={() => setShowReplies(!showReplies)}
          className="ml-14 text-blue-600 text-sm mt-1 hover:underline"
        >
          {showReplies
            ? "Hide Replies ▲"
            : `Show Replies (${data.replies.length}) ▼`}
        </button>
      )}

      {showReplies && hasReplies && (
        <div className="ml-10 mt-2">
          {data.replies.map((reply, i) => (
            <Comment key={i} data={reply} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
