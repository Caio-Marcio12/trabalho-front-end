async function carregarComponente(url, seletor) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    const html = await res.text();
    const el = document.querySelector(seletor);
    if (!el) throw new Error(`Seletor não encontrado: ${seletor}`);
    el.innerHTML = html;
  } catch (err) {
    console.error('Erro carregarComponente:', err);
    const el = document.querySelector(seletor);
    if (el) el.innerHTML = `<div style="color:red">Erro ao carregar componente: ${err.message}</div>`;
  }
}
window.carregarComponente = carregarComponente;