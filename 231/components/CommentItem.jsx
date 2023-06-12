const React = require('react');

function CommentItem({ comment, user }) {
  return (
    <div data-id={comment.id} className="papa">
      <h3>{comment.User.name}</h3>
      <p>{comment.description}</p>
      {user.id === comment.User.id && (
        <button type="button" className="btn btn-danger delete">
          Delete
        </button>
      )}
    </div>
  );
}

module.exports = CommentItem;
