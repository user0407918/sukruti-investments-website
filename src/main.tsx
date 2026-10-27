import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Unique build marker plus a versioned HTML entry forces browsers and CDN edges
// to fetch a fresh bundle instead of reusing a previously cached deployment.
document.documentElement.dataset.siteBuild = 'sukriti-cache-bypass-20261027-v2';

createRoot(document.getElementById('root')!).render(<App />);
