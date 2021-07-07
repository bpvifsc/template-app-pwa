const version = 4
const cachename = 'app-cache-v'+version

/**
 * Arquivos que serão salvos no cache para uso offline
 * O caminho para os arquivos deve ser completo e sem o dominio
 * Ex: arquivo logo.png
 *      URL: https://bpvifsc.github.io/template-app-pwa/imagens/logo.png
 *      Caminho: /template-app-pwa/imagens/logo.png
 *     
 */
const arquivos = [
    "./",
    "./index.html",
    "./main.js",
    "./service-worker.js",
    "./manifest.json",
    "./estilos.css",
    "./imagens/bootstrap.jpg",
    "./imagens/ig-logo.svg",
    "./imagens/linus-torvalds.jpg",
    "./imagens/logo.png",
    "./imagens/mail.svg",
    "./imagens/tim-berners-lee.jpg",
    "./imagens/wpp-logo.svg",
    "./imagens/icone192.png",
    "./imagens/icone512.png"
  ]
  self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open(cachename).then(function(cache) {
        return cache.addAll(arquivos);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(caches.match(event.request).then(function(response) {
      if (response !== undefined) {
        return response;
      } else {
        return fetch(event.request).then(function (response) {
          let responseClone = response.clone();
          
          caches.open(cachename).then(function (cache) {
            cache.put(event.request, responseClone);
          });
          return response;
        }).catch(function () {
          return caches.match('/index.html');
        });
      }
    }));
  });