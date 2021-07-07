var pgAtual = "home";
function mostraPagina(pg) {
    $("#"+pgAtual).hide();
    $("#"+pg).show();
    pgAtual = pg;
}