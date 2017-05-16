import { Application, RouterComponent } from 'rotorjs';

import PanelComponent from './panelComponent';
import NodeComponent from './nodeComponent';

export default class ZeusApplication extends Application {

  constructor(rootElement) {
    super(rootElement);
  }

  start() {
    let router = new RouterComponent(this, null, 'router', {

      '': (match, router) => (
        new PanelComponent(this, router, 'panel')
      ),

      ':nodeName': (match, router) => (
        new NodeComponent(this, router, 'node', match.params.nodeName)
      )

    });
    super.start(router, 'router');
  }

  stop() {
    super.stop();
  }

};
