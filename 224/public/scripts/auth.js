const regForm = document.querySelector('#reg-form');
const logForm = document.querySelector('#log-form');

if (regForm) {
  regForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { name, email, password, cpassword } = e.target;
    const res = await fetch('/api/auth/registration', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        password: password.value,
        cpassword: cpassword.value,
      }),
    });
    const data = await res.json();
    if (data.message !== 'ok') {
      document.querySelector('.error').innerHTML = data.message;
    } else {
      window.location.assign('/');
    }
  });
}

if (logForm) {
  logForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    const res = await fetch('/api/auth/authorization', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });
    const data = await res.json();
    if (data.message !== 'ok') {
      document.querySelector('.error').innerHTML = data.message;
    } else {
      window.location.assign('/');
    }
  });
}
