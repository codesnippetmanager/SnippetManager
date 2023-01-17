import React from 'react';
import { createRoot } from 'react-dom/client';
import Homepage from './Homepage';
import './stylesheets/styles.css';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <Homepage />,
);
