const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

router.post('/registration', async (req, res) => {
  try {
    const { name, email, password, cpassword } = req.body;
    let user = await User.findOne({ where: { email } });
    if (!name || !email || !password || !cpassword) {
      res.json({ message: 'Заполните все поля' });
      return;
    }
    if (user) {
      res.json({ message: 'Такой емайл уже занят' });
      return;
    }

    if (password !== cpassword) {
      res.json({ message: 'Пароли не совпадают' });
      return;
    }
    const hash = await bcrypt.hash(password, 10);
    user = await User.create({ name, email, password: hash });
    req.session.userId = user.id;
    res.json({ message: 'ok' });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post('/authorization', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    const compare = await bcrypt.compare(password, user.password);
    if (!email || !password) {
      res.json({ message: 'Заполните все поля' });
      return;
    }
    if (!user || !compare) {
      res.json({ message: 'Такого юзера не существует или пароль неверный' });
      return;
    }
    req.session.userId = user.id;
    res.json({ message: 'ok' });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: 'Ошибка при удалении сессии' });
    }

    res
      .clearCookie('user_sid') // серверное удаление куки по имени
      .redirect('/');
  });
});

module.exports = router;
