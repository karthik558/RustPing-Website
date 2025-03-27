
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Check if dark mode is preferred
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Apply the appropriate class to the root html element
if (prefersDarkMode) {
  document.documentElement.classList.add('dark');
  document.documentElement.classList.remove('light');
} else {
  document.documentElement.classList.add('light');
  document.documentElement.classList.remove('dark');
}

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(<App />);
} else {
  console.error("Root element not found");
}
