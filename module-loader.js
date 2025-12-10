export async function loadModules() {
  const listEl = document.getElementById('module-list');
  const modulePath = 'modules/sample-module/module.json';
  const res = await fetch(modulePath);
  const mod = await res.json();
  const card = document.createElement('div');
  card.innerHTML = `<div style="border:1px solid var(--primary-color);padding:1em;margin:1em;">
    <h2>${mod.title}</h2>
    <p>${mod.description}</p>
    <a href="modules/sample-module/index.html">Start</a>
  </div>`;
  listEl.appendChild(card);
}
