function encriptar(elemento){
    var texto = document.getElementsByClassName("input")[0].value;
    texto = texto.split('');
    var texto_codificado ='';
    for (let i=0; i< texto.length; i++){
        switch(texto[i]){
            case 'a':
                texto[i] = 'ai';
                break;
            case 'e':
                texto[i] = 'enter';
                break;
            case 'i':
                texto[i] = 'imes';
                break;
            case 'o':
                texto[i] = 'ober';
                break;
            case 'u':
                texto[i] = 'ufat';
                break;      
        }

        texto_codificado = texto_codificado + texto[i];
    }

    document.getElementById("input-salida").innerHTML = texto_codificado;
    document.getElementById("entrada").value = '';
}


function desencriptar(elemento){
    var texto = document.getElementsByClassName("input")[0].value;
    var texto_codificado ='';
    for (let i=0; i< texto.length; i++){
        if (texto[i] == 'a'){
            texto_codificado = texto_codificado + 'a';
            i = i+1;
        }
        else if (texto[i] == 'e'){
            texto_codificado = texto_codificado + 'e';
            i = i+4;
        }
        else if (texto[i] == 'i'){
            texto_codificado = texto_codificado + 'i';
            i = i+3;
        }
        else if (texto[i] == 'o'){
            texto_codificado = texto_codificado + 'o';
            i = i+3;
        }
        else if(texto[i] == 'u'){
            texto_codificado = texto_codificado + 'u';
            i = i+3;
        }
        else {
            texto_codificado = texto_codificado + texto[i];
        }
    }

    document.getElementById("input-salida").innerHTML = texto_codificado;
    document.getElementById("entrada").value = '';
}

function copiar(elemento){
    var copia = document.getElementsByClassName("salida")[0].value;
    if (copia.value == ''){
        alert("No se encontró ningún texto para copiar.")
    }
    else{
        alert("Su texto ha sido copiado.");
        document.getElementById("input-salida").innerHTML = '';
        document.getElementById("entrada").value = copia;
        
    }
    
}

