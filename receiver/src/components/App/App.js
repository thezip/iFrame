import React, {Component} from 'react';

export default class App extends Component{
  
  render() {

    
    const test = () => {
      document.getElementById('f').contentWindow.postMessage('', 'http://localhost:3006');
    }

    window.addEventListener('message', (e) => {

      console.log(e.data['task']);
      // console.log(e.data);

    });

    return (
      <div className="App">
        <h2>[Reciver]</h2>
        <iframe src="http://localhost:3006" id="f" frameBorder='1'></iframe>
        <button onClick={test}>Button</button>
      </div>
    );
  }
}
