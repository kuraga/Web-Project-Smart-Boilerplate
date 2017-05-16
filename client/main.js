'use strict';

import ZeusApplication from './src/zeusApplication';

var application;

window.onload = () => {
  application = new ZeusApplication(document.body);
  application.start();
};

window.onunload = () => {
  application.stop();
};
