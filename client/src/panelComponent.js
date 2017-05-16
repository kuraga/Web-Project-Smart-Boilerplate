import { Component } from 'rotorjs';

import h from 'virtual-dom/h';
import 'whatwg-fetch';
import hsvg from 'virtual-dom/virtual-hyperscript/svg';

export default class PanelComponent extends Component {

  constructor(application, parent = null, name = 'panel', initialState = {}) {
    super(application, parent, name, initialState);
  }

  activate() {
    super.activate();

    this.updateNodes();
    this.timer = setInterval(this.updateNodes.bind(this), 500);
  }

  deactivate() {
    clearInterval(this.timer);

    super.deactivate();
  }

  render() {
    if (this.state.nodes === undefined) {
      return <div></div>;
    }

    return <ul className="panel">
      {Object.keys(this.state.nodes).map((nodeName) => (
         <li className="node-item">
           <a href={`#${nodeName}`}>
             {donutChart(this.state.nodes[nodeName].status, 50, '#ff0000', String(this.state.nodes[nodeName].status))}
           </a>
         </li>
       ))}
    </ul>;
  }

  updateNodes() {
    window.fetch('/api/state')
    .then(response => response.json())
    .then(nodes => { this.state.set('nodes', nodes); });
  }
};

function donutChart(percentage, size, color, text) {
  let svgns = 'http://www.w3.org/2000/svg';
  let viewBox = '0 0 ' + size + ' ' + size;

  let bcolor = '#ebebeb';

  let unit = (Math.PI *2) / 100;  
  let startangle = 0;
  let endangle = percentage * unit - 0.001;
  let x1 = (size / 2) + (size / 2) * Math.sin(startangle);
  let y1 = (size / 2) - (size / 2) * Math.cos(startangle);
  let x2 = (size / 2) + (size / 2) * Math.sin(endangle);
  let y2 = (size / 2) - (size / 2) * Math.cos(endangle);
  let big = 0;
  if (endangle - startangle > Math.PI) {
    big = 1;
  }
  let d = 'M ' + (size / 2) + ',' + (size / 2) +  // Start at circle center
    ' L ' + x1 + ',' + y1 +                       // Draw line to (x1,y1)
    ' A ' + (size / 2) + ',' + (size / 2) +       // Draw an arc of radius r
    ' 0 ' + big + ' 1 ' +                         // Arc details...
    x2 + ',' + y2 +                               // Arc goes to to (x2,y2)
    ' Z';                                         // Close path back to (cx,cy)
  let pcolor = '#f05f3b';

  let fcolor = '#ffffff';

  return hsvg('svg', { ns: svgns, width: size, height: size, viewBox: viewBox }, [
    hsvg('circle', { cx: size/2, cy: size/2, r: size/2, fill: bcolor }),
    hsvg('path', { d: d, fill: pcolor }),
    hsvg('circle', { cx: size/2, cy: size/2, r: size/3, fill: fcolor }),
    hsvg('text', { x: size/2-10, y: size/2+5, fontSize: 10}, [text])
  ]);
}
