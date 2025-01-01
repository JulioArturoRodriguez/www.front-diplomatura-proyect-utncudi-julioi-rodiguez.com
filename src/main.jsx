
import React from 'react';
import { createRoot } from 'react-dom/client'
import AppRoutes from '../src/Rutas'
import 'bootstrap/dist/css/bootstrap.min.css';



createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <AppRoutes />
    </React.StrictMode>
)
