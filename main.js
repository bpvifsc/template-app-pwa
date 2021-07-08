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

var pedidoInstalacao;
window.addEventListener('beforeinstallprompt', function(e) {
  pedidoInstalacao = e;
});

function installApp() {
    pedidoInstalacao.prompt(); 
}