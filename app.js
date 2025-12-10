import { loadBranding } from './components/ui.js';
import { loadModules } from './components/module-loader.js';

window.addEventListener('DOMContentLoaded', async () => {
  await loadBranding();
  await loadModules();
});
