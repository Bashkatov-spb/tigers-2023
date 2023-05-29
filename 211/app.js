require('@babel/register');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs').promises;
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const Form = require('./components/Form');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.send('Hello tigers! =)');
});

app.get('/students', (req, res) => {
  res.send('Students page');
});

app.get('/students/:studentId/:chotoId', (req, res) => {
  res.send(req.params);
});

app.get('/films/:filmId/actors/:actorId', (req, res) => {
  res.send(req.params);
});

app.get('/query', (req, res) => {
  const { name, age, salary } = req.query;
  res.send({ name, age, salary });
});

app.get('/form', (req, res) => {
  const form = React.createElement(Form, {
    title: 'Forma registracii',
    zagolovok: 'Это форма регистрации',
    // name: 'Admin',
  });
  const html = ReactDOMServer.renderToStaticMarkup(form);
  const document = `<!DOCTYPE html>${html}`;
  res.send(document);
  // const { name } = req.query;
  // res.sendFile(path.join(__dirname, './html/index.html'));
  //   const html = `<form>
  //   <input type="text" />
  //   <input type="text" />
  //   <button type="submit">Submit</button>
  // </form>`;
  //   res.write('<!DOCTYPE html>');
  //   res.end(html);
  // res.send(`<script>alert('Helllllloooooooo ${name}!!! =)')</script>`);
});

app.get('/forma', (req, res) => {
  res.json(req.query);
});

app.post('/forma', async (req, res) => {
  try {
    // const num = await fs.readFile('./suslik', 'utf8');
    // const result = await User.create({req.body})
    res.redirect('/students');
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

app.listen(PORT, () => {
  console.log(`Этот сервер работает на ${PORT} порту`);
});
