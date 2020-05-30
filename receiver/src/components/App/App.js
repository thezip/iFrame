import React, {Component} from 'react';
import './App.css';
export default class App extends Component{
  
  render() {
 
    const test = () => {
     
      document.getElementById('f').contentWindow.postMessage('', 'http://localhost:3006');
      window.addEventListener('message', (e) => {

        //alert(e.data['task']);
        this.refs.tr.value = e.data['task'];
      
      });
    }
    
    return (
      <div className="App">
        <h2>[Reciver]</h2>
        <input id='textR' ref='tr' type='text' size='30'/>
        <iframe src="http://localhost:3006" id="f" frameBorder='1'></iframe>
        <button onClick={test}>Button</button>
      </div>
    );
  }
}
