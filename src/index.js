import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { initContract } from './utils'

window.nearInitPromise = initContract()
  .then(() => {
    ReactDOM.render(
      <HashRouter> 
        <App />
      </HashRouter>,    
      document.querySelector('#root')
    )
  })
  .catch(console.error)
