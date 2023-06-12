const React = require('react');
const Layout = require('./Layout');
const CommentItem = require('./CommentItem');

function ProductItemPage({ product, user, comments }) {
  return (
    <Layout user={user}>
      <div className="card" style={{ width: '18rem' }}>
        <img src={product.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.cost}</p>
          <p className="card-text">{product.count}</p>
          <a href="/" className="btn btn-primary">
            Show more
          </a>
          {user && (
            <form data-id={product.id} id="add-comment">
              <input name="description" type="text" />
              <button type="submit" className="btn btn-secondary">
                Add comment
              </button>
            </form>
          )}
        </div>
      </div>
      <div className="comments_list">
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} user={user} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = ProductItemPage;
