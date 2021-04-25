const pokemon = "Bulbasaur";
const pokemon2 = "bulbasaur";
const pokemon3 = "BULBASAUR";
const botao = document.querySelector("button");

function verificaPokemon(){
    const input = document.querySelector("input");
    const chute = input.value;
    //const chute = document.querySelector("input").value;  //entrar no html, buscar o input e busar o texto que o usuario digitou 

    //alert("chute: " +chute);
    //console.log("chute: " +chute);

    if (pokemon == chute || pokemon2 == chute || pokemon3 == chute){
        input.value = "Acertou! :)";
        //alert("Você acertou!!!");
    } else{
        input.value = "Errou! :(";
        //alert("Você Errou!");
    }
}

botao.onclick = verificaPokemon;
