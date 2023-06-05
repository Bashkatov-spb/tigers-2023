const form = document.querySelector('#add-animal');
const list = document.querySelector('.animals_list');
const formUpdate = document.querySelector('#update-animal');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { action, method, name, image, type } = e.target;
    const res = await fetch(action, {
      method,
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        image: image.value,
        type_id: type.value,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (data.message === 'success') {
      document.querySelector('.animals_list').insertAdjacentHTML('beforeend', data.html);
      e.target.reset();
    }
  });
}
if (list) {
  list.addEventListener('click', async (e) => {
    if (e.target.classList.contains('btn-delete')) {
      const card = e.target.closest('.card');
      const { id } = card.dataset;
      const res = await fetch(`/api/animals/${id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.message === 'success') {
        card.remove();
      } else {
        console.log(data);
        alert(data.message);
      }
    }
    if (e.target.classList.contains('like')) {
      const card = e.target.closest('.card');
      const { id } = card.dataset;
      const res = await fetch(`/api/likes/${id}`, {
        method: 'PUT',
      });
      const data = await res.json();
      if (data.message === 'like') {
        e.target.closest('.like__container').lastElementChild.innerText =
          +e.target.closest('.like__container').lastElementChild.innerText + 1;
        e.target.setAttribute('src', 'like_full.png');
      } else {
        e.target.closest('.like__container').lastElementChild.innerText =
          +e.target.closest('.like__container').lastElementChild.innerText - 1;
        e.target.setAttribute('src', 'like_empty.png');
      }
    }
  });
}
if (formUpdate) {
  formUpdate.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { name, image, action, type } = e.target;

    const res = await fetch(action, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        image: image.value,
        type_id: type.value,
      }),
    });
    const data = await res.json();
    if (data.length) {
      window.location.assign('/animals');
    }
  });
}
