function calcule(){
   let nulmero = document.getElementById("numero").value;
    let mostrar = document.getElementById("tela");
 
    for (i = 1; i <= 10; i++){
        let tabuada = nulmero * i;
        mostrar.innerHTML += `${nulmero} x ${i} = ${tabuada} <br>`;
        
    }
}