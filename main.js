var pgAtual = "#home";

function mostraPagina(pg) {
    //Cria o registro e adiciona(pushstate) no histórico do navegador
    const state = { 'page_id': pg }   
    history.pushState(state, 'App SPA Modelo');

    //Atualiza a página apresentada
    atualizaPaginaView(pg);
}

//Função que muda o conteúdo da página
function atualizaPaginaView(pg) {
    $(pgAtual).hide();
    $(pg).show();
    pgAtual = pg;
}

//Evento chamado sempre que o navegador volta um nível no histórico
window.addEventListener('popstate', (event) => {
    console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
    if(event.state==null){
        atualizaPaginaView('#home');
    }else{
        atualizaPaginaView(event.state.page_id);
    }
});



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