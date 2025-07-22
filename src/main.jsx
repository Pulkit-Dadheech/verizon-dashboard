import React from 'react'
import ReactDOM from 'react-dom/client'
import './public-path/Public-path'; 
import { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'

let root = null;

// Qiankun lifecycle function: bootstrap
export async function bootstrap() {
  console.log('Verizon Dashboard app bootstrapped');
}

// Qiankun lifecycle function: mount
export async function mount(props) {
  console.log('Verizon Dashboard app mounted with props:', props);
  const container = props?.container 
    ? props.container.querySelector('#root')
    : document.getElementById('root');
  
  if (container) {
    root = ReactDOM.createRoot(container);
    root.render(
      <React.StrictMode>
        <App {...props} />
      </React.StrictMode>
    );
  }
}

// Qiankun lifecycle function: unmount
export async function unmount(props) {
  console.log('Verizon Dashboard app unmounted');
  if (root) {
    root.unmount();
    root = null;
  }
}

// Standalone mode - initialize immediately
if (!window.__POWERED_BY_QIANKUN__) {
  console.log('Starting standalone mode');
  const container = document.getElementById('root');
  if (container) {
    console.log('Root container found, creating React root');
    root = ReactDOM.createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log('App rendered successfully');
  } else {
    console.error('Root container not found!');
  }
} else {
  console.log('Running in micro-frontend mode');
}
