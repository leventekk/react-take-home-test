import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import Theme from '@common/elements/Theme/Theme'
import reportWebVitals from './reportWebVitals'

createRoot(document.querySelector('#root') as HTMLElement).render(
  <StrictMode>
    <Theme>
      <App />
    </Theme>
  </StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
