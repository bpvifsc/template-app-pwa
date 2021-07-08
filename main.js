var pgAtual = "home";
function mostraPagina(pg) {
    $("#"+pgAtual).hide();
    $("#"+pg).show();
    pgAtual = pg;
}

//Registra o serviceWorker da aplicação para cache de recursos offline
if ('serviceWorker' in navigator) {  
    navigator.serviceWorker.register("./service-worker.js");
}

//Verifica se o app pode ser instalado e mostra o botão
var pedidoInstalacao;
window.addEventListener('beforeinstallprompt', function(installPrompt) {
    if(installPrompt){
        $("#installAppBt").show();
        pedidoInstalacao = installPrompt;
    }
});

//Inicia a instalação do app
function installApp() {
    pedidoInstalacao.prompt(); 
}