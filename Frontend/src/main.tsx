import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>   {/*  브라우저 URL 감지, 내부의 Route, Link, useNavigate를 가능케 함 */}
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
