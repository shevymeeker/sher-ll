export async function loadBranding() {
  const res = await fetch('branding/branding.json');
  const data = await res.json();
  const header = document.getElementById('branding');
  header.innerHTML = `<img src="${data.logo}" alt="${data.orgName}" style="height:50px;"> <h1>${data.orgName}</h1>`;
  document.body.style.setProperty('--primary-color', data.primaryColor);
  document.body.style.setProperty('--accent-color', data.accentColor);
}
