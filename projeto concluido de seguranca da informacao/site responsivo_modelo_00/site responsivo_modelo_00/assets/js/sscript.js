//Esse javascript vai criptografar o que for digitado em Zetta Polar//
function cripto() {
    //Ela vai transfomar o texto que for pego pelo 'text' vai ser transformado em um valor//
    let text = document.getElementById('text').value
    //Ele vai "fatiar" o texto em varias partes, assim, criando um novo texto//
    let split = text.split("")
    //Agora que fatiamos o texto, iremos contar quantos caracteres foram fatiados no texto//
    let chars = split.length
    //É um array pre devinido que vai embaralhar o texto// 
    const pre = ['Z', 'E', 'T', 'T', 'A', 'P', 'O', 'L', 'A', 'R', 'z', 'e', 't', 't', 'a', 'p', 'o', 'l', 'a', 'r']

    const pos = ['P', 'O', 'L', 'A', 'R', 'Z', 'E', 'T', 'T', 'A', 'p', 'o', 'l', 'a', 'r', 'z', 'e', 't', 't', 'a']
    let rslt = document.getElementById('result')
    //Se ele for abaixo de 0 ira ser feito um split, se for igual a -1 ele ira fazer outro split, depois ele juntara tudo e nos mostrara na pagina// 
    //Se a index receber um valor prencher até -1 ele ira devolver index pos e se for 0 ele ira devolver index pre// 
    for (i = 0; i < chars; i++) {
        let index = pre.indexOf(split[i])

        if (index === -1) {
            split[i] = split[i]
         } else {
            split[i] = pos[index]
        }
        const toString = split.join('')

        rslt.innerText = toString
    }

} //Vai pegar o texto escrito e criptografar ele alterando as letra de lugar//