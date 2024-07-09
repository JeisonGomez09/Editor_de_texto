const vocales = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
};

const vocalesInvertidas = {
    'ai': 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufat': 'u'
};

function encriptar() {
    let textoAEncriptar = document.getElementById('textoAEncriptar').value;
    let encriptado = textoAEncriptar.split('').map(caracter => {
        return vocales[caracter] || caracter;
    }).join('');
    document.getElementById('textoFinal').innerText = encriptado;
}

function desencriptar() {
    let textoEncriptado = document.getElementById('textoAEncriptar').value;
    let desencriptado = textoEncriptado;
    for (let [clave, valor] of Object.entries(vocalesInvertidas)) {
        let regex = new RegExp(clave, 'g');
        desencriptado = desencriptado.replace(regex, valor);
    }
    document.getElementById('textoFinal').innerText = desencriptado;
}

function copiar() {
    let texto = document.getElementById('textoFinal').innerText;
            navigator.clipboard.writeText(texto).then(() => {
                alert('Texto copiado al portapapeles');
            }).catch(err => {
                console.error('Error al copiar el texto: ', err);
            });
}