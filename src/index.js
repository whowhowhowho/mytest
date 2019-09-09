import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Todos from './components/todos/components/Todos.jsx'
ReactDOM.render(
<div>
  <Todos></Todos>
</div>
,
document.getElementById('root'))



serviceWorker.unregister();
