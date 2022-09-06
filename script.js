// Galeria de imagens

const imagens = document.querySelectorAll(".lista-fotos img");

const imagemGrande = document.querySelector("imagem-main");

function trocarImagem(event) {
  const img = event.currentTarget;
  imagemGrande.prepend(img);
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);
