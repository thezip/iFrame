import React, {Component} from 'react';
export default class App extends Component {
  render() {   

    window.addEventListener('message', (e) => {
      if (e.origin === 'http://localhost:3005'){

        let msg = {'task': this.refs.ts.value};
        e.source.postMessage(msg, e.origin);
      }
    });

    return (
      <div className='App'>
        <h2>[Sender]</h2>
        <input id='text' ref='ts' type='text' placeholder='Enter text...' size='30'/>
      </div>
    );
  }
}