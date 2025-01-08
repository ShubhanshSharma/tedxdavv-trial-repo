import React from 'react';
import ReactDOM from 'react-dom/client';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import App from './App';
import './index.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Configure GSAP for better mobile performance
gsap.config({
  force3D: true,
  nullTargetWarn: false,
  autoSleep: 60,
  autoKillThreshold: 1
});

// Add touch event handling for better mobile support
if (typeof window !== 'undefined') {
  const touchHandler = {
    capture: true,
    passive: false
  };
  
  document.addEventListener('touchstart', () => {
    // Wake up GSAP on first touch
    gsap.ticker.wake();
  }, touchHandler);
}

// Create root and render app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Ensure GSAP is ready before rendering
window.addEventListener('load', () => {
  ScrollTrigger.refresh();
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});

// Handle resize events
let resizeTimeout;
window.addEventListener('resize', () => {
  // Debounce resize events
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    ScrollTrigger.refresh();
  }, 250);
});