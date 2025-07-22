import './public-path/Public-path.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

let root = null;

// Qiankun lifecycle
export async function bootstrap() {
  console.log('Verizon Dashboard app bootstrapped');
}

export async function mount(props) {
  console.log('Verizon Dashboard app mounted with props:', props);
  const container = props?.container
    ? props.container.querySelector('#root')
    : document.getElementById('root');
  root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <App {...props} />
    </React.StrictMode>
  );
}

export async function unmount() {
  console.log('Verizon Dashboard app unmounted');
  root?.unmount();
  root = null;
}

// Standalone mode
if (!window.__POWERED_BY_QIANKUN__) {
  mount();
}
