// Rolagem suave ao clicar em "Voltar ao topo"
document.getElementById("btnTopo").addEventListener("click", function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
// Efeito no ícone do WhatsApp
const whatsappImg = document.querySelector(".whatsapp img");

whatsappImg.addEventListener("mouseenter", () => {
  whatsappImg.style.transform = "scale(1.1)";
  whatsappImg.style.transition = "transform 0.3s ease";
});

whatsappImg.addEventListener("mouseleave", () => {
  whatsappImg.style.transform = "scale(1)";
});
