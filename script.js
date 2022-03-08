function calcularMedia(){
    let n1 = document.querySelector("#primeiraNota").value
    let n2 = document.querySelector("#segundaNota").value
    let n3 = document.querySelector("#terceiraNota").value
    let n4 = document.querySelector("#quartaNota").value

    let nota1 = parseFloat(n1)
    let nota2 = parseFloat(n2)
    let nota3 = parseFloat(n3)
    let nota4 = parseFloat(n4)

    let media = (nota1 + nota2 + nota3 + nota4) / 4
    
    console.log(media)
    if (n1 === undefined || n2 === undefined || n3 === undefined || n4 === undefined) {
        alert("Preencha os Campos Corretamente")
    } else if (media >= 7) {
        alert("Aluno Aprovado " + `Média ${media}`)
    } else {
        alert("Aluno Reprovado " + `Média ${media}`)
    }
}
