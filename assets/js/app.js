const btnCriptografar = document.getElementById("btn-criptografar");
const btnDescriptografar = document.getElementById("btn-descriptografar");
let semPalavra = document.getElementById("not-text");
let comPalavra = document.getElementById("with-text");
let ondeColocarPalavra= document.getElementById("to-add-text");
const btnCopiar = document.getElementById("copy");


btnCriptografar.addEventListener("click", function(){
    if(validarTexto()){

    }else{
        let palavraCriptogragada = criptografarTexto();
        semPalavra.style.display = 'none';
        comPalavra.style.display = 'flex';
        ondeColocarPalavra.value = palavraCriptogragada;

    }

})

btnDescriptografar.addEventListener("click", function(){
    if(validarTexto()){

    }else{
        semPalavra.style.display = 'none';
        comPalavra.style.display = 'flex';
        ondeColocarPalavra.value = descriptografar();
    }

    
})
let texto = document.getElementById("texto");

function criptografarTexto(){
    let verificar = texto.value;
    let novaPalavara = '';
    for(let i = 0; i < verificar.length; i++){
        if (verificar[i] == 'a'){
            novaPalavara += 'ai';
        }else if(verificar[i] == 'e'){
            novaPalavara += 'enter';
        }else if(verificar[i] == 'i'){
            novaPalavara += 'imes';
        }else if(verificar[i] == 'o'){
            novaPalavara += 'ober';
        }else if(verificar[i] == 'u'){
            novaPalavara += 'ufat';
        }else{
            novaPalavara += verificar[i];
        }
    }

    return novaPalavara;
}

function descriptografar(){
    let novaPalavra = texto.value; 
    let novaMesmoPalavra = '';

    novaMesmoPalavra = novaPalavra.replaceAll('ai', 'a')
                                  .replaceAll('enter','e')
                                  .replaceAll('imes', 'i')
                                  .replaceAll('ober', 'o')
                                  .replaceAll('ufat', 'u');

    return novaMesmoPalavra;
}

function alpha(e) {
    var k;
    document.all ? k = e.keyCode : k = e.which;
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
}

function validarTexto(){
    if (texto.value == ''){
        alert("Por favor, digite algo.")
        return true;
    }
    return false;
}

