import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { AppProvider } from './context.jsx'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </AppProvider>
)
