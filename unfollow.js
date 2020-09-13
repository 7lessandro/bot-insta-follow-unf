let contador = 0

document.querySelectorAll('ID da classe SEGUINDO').forEach((item, index)=> {

    setTimeout(() => {

        if (item.innerText == 'Seguindo') {
            item.click();
            document.querySelectorAll('ID da classe DEIXAR DE SEGUIR').forEach((item, index) => {
                if (item.innerText == 'Deixar de seguir') {
                    item.click();
                    contador++
                    console.log(`Você já deixou de seguir ${contador} pessoas =)`)
                } else {
                    console.log('Deu erro')
                }
            })
        }
        
    }, index * 30000)

})