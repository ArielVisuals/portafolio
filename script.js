const encriptar = () => {
  const texto = document.getElementById("texto").value;
  let resultado = "";

  for (let i = 0; i < texto.length; i++) {
    const letra = texto.charAt(i);
    switch (letra) {
      case "e":
        resultado += "enter";
        break;
      case "i":
        resultado += "imes";
        break;
      case "a":
        resultado += "ai";
        break;
      case "o":
        resultado += "ober";
        break;
      case "u":
        resultado += "ufat";
        break;
      default:
        resultado += letra;
        break;
    }
  }

  document.getElementById("resultado").value = resultado;
};

const desencriptar = () => {
  const texto = document.getElementById('texto').value;
  let resultado = '';
  let i = 0;
  
  while (i < texto.length) {
    let index = texto.indexOf('enter', i);
    if (index === i) {
      resultado += 'e';
      i += 5;
      continue;
    }
    
    index = texto.indexOf('imes', i);
    if (index === i) {
      resultado += 'i';
      i += 4;
      continue;
    }
    
    index = texto.indexOf('ai', i);
    if (index === i) {
      resultado += 'a';
      i += 2;
      continue;
    }
    
    index = texto.indexOf('ober', i);
    if (index === i) {
      resultado += 'o';
      i += 4;
      continue;
    }
    
    index = texto.indexOf('ufat', i);
    if (index === i) {
      resultado += 'u';
      i += 4;
      continue;
    }
    
    resultado += texto.charAt(i);
    i++;
  }
  
  document.getElementById('resultado').value = resultado;
};


const copiarTexto = () => {
  const resultado = document.getElementById("resultado");
  resultado.select();
  document.execCommand("copy");
};

document.getElementById("copiar").addEventListener("click", copiarTexto);

document.getElementById("encriptar").addEventListener("click", encriptar);
document.getElementById("desencriptar").addEventListener("click", desencriptar);
document.getElementById("copiar").addEventListener("click", copiarResultado);
