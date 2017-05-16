var Nightmare = require('nightmare');
var tapes = require('tapes');

tapes('главная страница', function (t) {
  var page;
  var nightmare;

  t.beforeEach(function (t) {
    nightmare = Nightmare();
    page = nightmare
      .goto('http://localhost:4567');

    t.end();
  });

  t.afterEach(function (t) {
    nightmare.end()
      .then(t.end).catch(t.end);
  });

  t.test('содержит панель', function (t) {
    page
      .wait('ul.panel')
      .exists('ul.panel')
      .then((exists) => {
        t.assert(exists);
      })
     .then(t.end).catch(t.end);
  });

  t.test('панель', function (t) {
    t.beforeEach(function (t) {
      page
        .wait('ul.panel')
        .then(t.end).catch(t.end);
    });


    t.test('содержит узлы', function (t) {
      t.plan(1);

      page
        .exists('ul.panel > li.node-item')
        .then((exists) => {
          t.assert(exists);
        });
    });

    t.test('узлы', function (t) {
      t.test('содержат числа', function (t) {
        t.plan(1);

        page
          .evaluate((selector) => {
            return document.querySelector(selector).innerText;
          }, 'ul.panel > li.node-item')
          .then((text) => {
            t.assert(/\d+/.test(text));
          });
      });

      t.test('являются ссылкой', function (t) {
        t.plan(1);

        page
          .exists('ul.panel > li.node-item > a')
          .then((exists) => {
            t.assert(exists);
          });
      });

      t.test('ведут на страницу узла', function (t) {
        t.plan(1);

        page
          .click('ul.panel > li.node-item > a')
          .wait('.node-info')
          .url()
          .then((newUrl) => {
            t.assert(/http:\/\/localhost:4567\/#\d+/.test(newUrl));
          });
      });

      t.end();
    });

    t.end();
  });

  t.end();
});
