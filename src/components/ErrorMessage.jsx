import React from 'react';
import { AlertCircle } from 'lucide-react';

const ErrorMessage = ({ message }) => (
    <div className="weather-card" style={{ padding: '24px', border: '1px solid rgba(248, 113, 113, 0.4)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <AlertCircle size={40} color="#f87171" />
            <p style={{ color: '#f87171', fontWeight: 600 }}>{message}</p>
        </div>
    </div>
);

export default ErrorMessage;
