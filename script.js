function botao(algo)
{
    document.getElementById("numero").innerText+=String(algo)
}
function botaoC()
{
    document.getElementById("numero").innerText=""
}
function botaoigual()
{
    document.getElementById("numero").innerText=eval(document.getElementById("numero").innerText)
}