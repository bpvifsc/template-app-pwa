const version = 3
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
    "/template-app-pwa/",
    "/template-app-pwa/index.html",
    "/template-app-pwa/main.js",
    "/template-app-pwa/service-worker.js",
    "/template-app-pwa/manifest.json",
    "/template-app-pwa/estilos.css",
    "/template-app-pwa/imagens/bootstrap.jpg",
    "/template-app-pwa/imagens/ig-logo.svg",
    "/template-app-pwa/imagens/linus-torvalds.jpg",
    "/template-app-pwa/imagens/logo.png",
    "/template-app-pwa/imagens/mail.svg",
    "/template-app-pwa/imagens/tim-berners-lee.jpg",
    "/template-app-pwa/imagens/wpp-logo.svg",
    "/template-app-pwa/imagens/icone192.png",
    "/template-app-pwa/imagens/icone512.png"
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