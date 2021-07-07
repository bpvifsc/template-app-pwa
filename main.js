var pgAtual = "home";
function mostraPagina(pg) {
    $("#"+pgAtual).hide();
    $("#"+pg).show();
    pgAtual = pg;
}

//Registra o serviceWorker da aplicação
if ('serviceWorker' in navigator) {  
    navigator.serviceWorker.register("./service-worker.js");
}