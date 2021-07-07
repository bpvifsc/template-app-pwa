const version = 1

const arquivos = [
    "/",
    "index.html",
    "main.js",
    "service-worker.js",
    "manifest.json",
    "estilo.css",
    "imagens/bootstrap.jpg",
    "imagens/iq-logo.svg",
    "imagens/linus-torvalds.jpg",
    "imagens/logo.png",
    "imagens/mail.svg",
    "imagens/tim-berners-lee.jpg",
    "imagens/wpp-logo.svg"
  ]

self.addEventListener("activate", function(){
    caches.open("app-arquivos-"+version).then(cache => {
      cache.addAll(arquivos)
        .then(()=>{
          caches.delete('app-arquivos-'+(version - 1))
          caches.delete('app-arquivos')
        })
    })
  })

self.addEventListener("fetch", (event) => {
    const pedido = event.request;
    const promiseResponse = caches
      .match(pedido)
      .then((respostaCache) => {
        return respostaCache ? respostaCache : fetch(pedido);
      });
  
    event.respondWith(promiseResponse);
  }); 