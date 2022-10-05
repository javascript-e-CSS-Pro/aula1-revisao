

function validarEChamarAPI() {
    
const email = document.querySelector ("#email").value
const senha = document.querySelector ("#senha").value


let emailTemValor = email != ""
let senhaTemValor = senha != ""

let Sucesso = emailTemValor && senhaTemValor

if (Sucesso) {

document.querySelector("#ressucesso").style.display = "block"
document.querySelector("#resinvalido").style.display = "none"

} else {
document.querySelector("#resinvalido").style.display = "block"
document.querySelector("#ressucesso").style.display = "none"

}

}





