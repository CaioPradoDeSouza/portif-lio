let contatoButton = document.querySelector("#contato");
let fecharButton = document.querySelector("#btn-modal");
let modal = document.querySelector("#modal");
let content = document.querySelector(".content");
let content1 = document.querySelector("#content");

contatoButton.addEventListener("click", mostraModal);
fecharButton.addEventListener("click", fechaModal);

function mostraModal(event) {
    event.preventDefault(event);
    modal.style.display = "flex";
    content.style.visibility = "hidden";
    content1.style.visibility = "hidden";
}

function fechaModal() {
    modal.style.display = "";
    content.style.visibility = "";
    content1.style.visibility = "";
}

