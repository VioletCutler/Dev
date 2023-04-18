import { createRoot } from 'react-dom/client';
import App from './components/App.jsx'

const appElement = document.getElementById('app')
const root = createRoot(appElement);
root.render(<App/>)