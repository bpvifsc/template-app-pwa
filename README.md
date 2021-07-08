# Modelo para APP baseado em Progressive Web Apps

Modelo com base no projeto: https://github.com/bpvifsc/template-app-bs-spa

Disponível On-line em: https://bpvifsc.github.io/template-app-pwa/

## Modificações para disponibilização de recursos PWA:

1. criação do arquivos manifest.json e link no arquivo index.html
```
<link rel="manifest" href="manifest.json">
```
2. registro do service-worker no arquivo main.js com o código:
```
if ('serviceWorker' in navigator) {  
    navigator.serviceWorker.register("./service-worker.js");
}
```
3. criação do arquivo service-worker.js com a implementação do cache para funcionamento offline
4. adicionado no arquivo index.html a nav-item no menu para instalação do app:
```
<li id="installAppBt" class="nav-item collapse">
    <hr />
    <a class="nav-link" href="#" onclick="installApp()"
    data-toggle="collapse" data-target="#menuNavbar">Instalar APP</a>
</li>
```
5. adicionado código no arquivo main.js responsavel por verificar se o app não esta instalado e mostrar o botao de instalação
```
var pedidoInstalacao;
window.addEventListener('beforeinstallprompt', function(installPrompt) {
    if(installPrompt){
        $("#installAppBt").show();
        pedidoInstalacao = installPrompt;
    }
});
```
6. criar a ação do botão que inicia a instalação do app, no arquivo main.js
```
function installApp() {
    pedidoInstalacao.prompt(); 
}
```

### Observações

Todos os caminhos de arquivos estão colocados de maneira relativa,
para que o funcionamento seja possível em servidor local e no github pages.

manifest.json:
* "scope": "./",
main.js:
* register("./service-worker.js");
service-worker.js:
* Todos os elementos do array ```arquivos```

Em uma aplicação real é indicado que estes caminhos sejam caminhos absolutos 
para um mesmo domínio web.






