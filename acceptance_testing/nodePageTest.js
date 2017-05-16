var Nightmare = require('nightmare');
var tapes = require('tapes');

tapes('страница узла', function (t) {
  var page;
  var nightmare;

  t.beforeEach(function (t) {
    nightmare = Nightmare();
    page = nightmare
      .goto('http://localhost:4567/#1');

    t.end();
  });

  t.afterEach(function (t) {
    nightmare.end()
      .then(t.end).catch(t.end);
  });

  t.test('информация об узле 1', function (t) {
    t.plan(1);

    page
      .wait('.node-info')
      .exists('.node-info')
      .then((exists) => {
        t.assert(exists);
      });
  });

  t.test('информация об узле 2', function(t) {
    t.plan(1);

    page
      .wait('.node-info')
      .evaluate((selector) => {
        return document.querySelector(selector).innerText;
      }, '.node-info')
      .then((text) => {
        t.assert(/Информация об узле 1:/.test(text));
      });
  });

  t.end();
});
