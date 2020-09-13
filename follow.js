let contador = 0
let arr = document.querySelectorAll('ID da classe SEGUIR')

arr.forEach((v, i) => {
    setTimeout(() => {
        if (!v.classList.contains ('ID da classe SEGUINDO')) {
            v.click()
            contador++
            console.log(`Você já seguiu ${contador} pessoas =)`)
        } else {
            console.log('Você já segue este usuário.')
        }
    }, i * 30000);
});