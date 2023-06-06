const express = require('express');
const path = require('path');
const ssr = require('../middleware/ssr');

const config = (app) => {
  app.use(ssr);
  app.use(express.json());
  app.use(express.static(path.join(__dirname, '..', 'public')));
};

module.exports = config;
