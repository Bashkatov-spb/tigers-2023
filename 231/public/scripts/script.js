const formComment = document.querySelector('#add-comment');
const commentList = document.querySelector('.comments_list');
const productsList = document.querySelector('.products_list');

if (formComment) {
  formComment.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { description } = e.target;
    const { id } = e.target.dataset;
    const res = await fetch('/api/comments', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ description: description.value, product_id: id }),
    });
    const data = await res.json();
    console.log(data);
    if (data.message === 'success') {
      document.querySelector('.comments_list').insertAdjacentHTML('beforeend', data.html);
    }
  });
}

if (commentList) {
  commentList.addEventListener('click', async (e) => {
    if (e.target.classList.contains('delete')) {
      const papa = e.target.closest('.papa');
      const res = await fetch(`/api/comments/${papa.dataset.id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.message === 'success') {
        papa.remove();
      } else {
        alert(data.message);
      }
    }
  });
}

if (productsList) {
  productsList.addEventListener('click', async (e) => {
    if (e.target.classList.contains('add-fav')) {
      const { id } = e.target.dataset;
      const res = await fetch('/api/favourites', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          product_id: id,
        }),
      });
      const data = await res.json();
      console.log(data);
    }
    if (e.target.classList.contains('add-cart')) {
      const { id } = e.target.dataset;
      const res = await fetch('/api/cart', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          product_id: id,
        }),
      });
      const data = await res.json();
      console.log(data);
    }
  });
}
