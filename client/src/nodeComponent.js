import { Component } from 'rotorjs';

import h from 'virtual-dom/h';
import 'whatwg-fetch';

export default class NodeComponent extends Component {

  constructor(application, parent = null, name = 'panel', nodeName) {
    let initialState = {
      nodeName: nodeName
    };

    super(application, parent, name, initialState);
  }

  activate() {
    super.activate();

    this.updateNode();
    this.timer = setInterval(this.updateNode.bind(this), 1000);
  }

  deactivate() {
    clearInterval(this.timer);

    super.deactivate();
  }

  render() {
    if (this.state.node === undefined) {
      return <div></div>;
    }

    return <div className="node-info">
      Информация об узле {this.state.nodeName}:
      <br />
      {JSON.stringify(this.state.node)}
    </div>;
  }

  updateNode() {
    window.fetch(`/api/substances/${this.state.nodeName}`)
    .then(response => response.json() )
    .then(node => { this.state.set('node', node); });
  }
};
