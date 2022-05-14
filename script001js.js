function carregar(){
    var msg = document.getElementById('msg')
    var relogio = document.getElementById('hora')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var sec = data.getSeconds()
    relogio.innerHTML = `${hora}:${min}:${sec} `
    msg.innerHTML = 'A hora atual é:'
}