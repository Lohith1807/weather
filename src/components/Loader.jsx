import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '40px' }}>
        <motion.div
            style={{
                width: '40px',
                height: '40px',
                border: '4px solid rgba(255,255,255,0.2)',
                borderTop: '4px solid #60a5fa',
                borderRadius: '50%'
            }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
    </div>
);

export default Loader;
