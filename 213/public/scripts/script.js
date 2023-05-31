const form = document.querySelector('#add-animal');
const list = document.querySelector('.animals_list');
const formUpdate = document.querySelector('#update-animal');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { action, method, name, image, type, user } = e.target;
    const res = await fetch(action, {
      method,
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        image: image.value,
        type_id: type.value,
        user_id: user.value,
      }),
    });
    const data = await res.json();
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
      const res = await fetch(`/animals/${id}`, {
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
  });
}
if (formUpdate) {
  formUpdate.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { name, image, action, user, type } = e.target;

    const res = await fetch(action, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        image: image.value,
        user_id: user.value,
        type_id: type.value,
      }),
    });
    const data = await res.json();
    if (data.length) {
      window.location.assign('/animals');
    }
  });
}
