const button = document.querySelector('.btn');

button.addEventListener('click', async (e) => {
  const res = await fetch('/version');
  const data = await res.json();
  e.target.innerText = data;
});
