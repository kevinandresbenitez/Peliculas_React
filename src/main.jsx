import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './libs/normalize.css';
import { PageLoader } from './components/PageLoader/index.jsx'

let App = lazy(() => import('./App.jsx'));


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<PageLoader/>}>
      <App />      
    </Suspense>
  </React.StrictMode>,
)
