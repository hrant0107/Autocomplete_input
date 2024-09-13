import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from '@src/components/App'
import { ErrorBoundary } from '@src/components/ErrorBoundary'

import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
