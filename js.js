const box = [...document.getElementsByClassName('box')]
const email = document.getElementById('email')
const password = document.getElementById('password')
const imgEmail = document.getElementById('img_email')
const imgPassword = document.getElementById('img_password')

//eventos
email.addEventListener('click', () => {
    if (email.focus) {
        imgEmail.src = './img/email-open.svg'
    }
})
email.addEventListener('blur', () => {
    imgEmail.src = './img/email_closed.svg'
})
imgPassword.addEventListener('click', () => {
    if (password.type === 'password') {
        password.type = 'text'
        imgPassword.src = './img/eye-slash.svg'
    } else if (password.type === 'text') {
        password.type = 'password'
        imgPassword.src = './img/eye.svg'
    }
})

box.map((el) => {
    el.addEventListener('mouseout', (evt) => {
        evt.target.style.animation = 'box .5s linear'
    })
})
box.map((el) => {
    el.addEventListener('mouseover', (evt) => {
        evt.target.removeAttribute('style')
    })
})
// end events

// gerar senha

const number = document.getElementById('number')
const letter = document.getElementById('letter')
const symbol = document.getElementById('symbol')
const btn = document.getElementById('generate-password')
const qtd = document.getElementById('qtd')
const receptor = document.getElementById('receptor')
const divReceptor = document.getElementById('password-hidden')
const span = document.getElementById('span')
const divHidden = document.getElementById('hidden')

const gerarNumber = () => {
    const numberRandom = Math.floor(Math.random() * 10 + 48)
    return String.fromCharCode(numberRandom)
}
const gerarUpperCase = () => {
    const upperCase = Math.floor(Math.random() * 26 + 65)
    return String.fromCharCode(upperCase)
}
const gerarlowwerCase = () => {
    const lowwerCase = Math.floor(Math.random() * 26 + 97)
    return String.fromCharCode(lowwerCase)
}
const gerarSymbol = () => {
    const symbolRandom = '@$%&()<>?/{}[]'
    return symbolRandom[Math.floor(Math.random() * symbolRandom.length)]
}

let array = []
let dfg = ''
span.addEventListener('click', () => {
    if (divHidden.classList.contains('show')) {
        divReceptor.classList.remove('show')
    }
    divHidden.classList.toggle('show')
    number.checked = false
    letter.checked = false
    symbol.checked = false
    qtd.value = 10
})
btn.addEventListener('click', () => {
    receptor.innerText = ''
    if (number.checked) {
        array.push(gerarNumber)
    }
    if (letter.checked) {
        array.push(gerarUpperCase, gerarlowwerCase)
    }
    if (symbol.checked) {
        array.push(gerarSymbol)
    }
    for (i = 0; i < qtd.value; i++) {
        const newRandom = array[Math.floor(Math.random() * array.length)]()
        dfg += newRandom
    }
    divReceptor.classList.add('show')
    receptor.innerText = dfg
    console.log(dfg)

    array = []
    dfg = ''
})








