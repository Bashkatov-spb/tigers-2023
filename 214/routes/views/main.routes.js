const router = require('express').Router();
const MainPage = require('../../components/MainPage');

router.get('/', (req, res) => {
  // const main = React.createElement(MainPage, { title: 'Main page' });
  // const html = ReactDOMServer.renderToStaticMarkup(main);
  // const document = `<!DOCTYPE html>${html}`;
  // const document = res.renderComponent(MainPage, { title: 'Main page' });
  // res.locals.user = { name: 'Петенька' };
  res.send(res.renderComponent(MainPage, { title: 'Main page' }));
});

module.exports = router;
