let contador = 0
let arr = document.querySelectorAll('.sqdOP.L3NKy.y3zKF')

arr.forEach((v, i) => {
    setTimeout(() => {
        if (!v.classList.contains ('._8A5w5')) {
            v.click()
            contador++
            console.log(`Você já seguiu ${contador} pessoas =)`)
        } else {
            console.log('Você já segue este usuário.')
        }
    }, i * 30000);
});